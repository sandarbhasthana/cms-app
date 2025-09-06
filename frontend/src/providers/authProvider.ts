import { AuthProvider, OnErrorResponse } from "@refinedev/core";
import { Role } from "@cms-app/prisma";

const TOKEN_KEY = "cms_access_token";
const ORG_KEY = "cms_org_id";
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface UserIdentity {
  id: string;
  email: string;
  role: Role;
  orgId: string;
  name: string;
}

export const authProvider: AuthProvider = {
  async login({ email, password }) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        return {
          success: false,
          error: {
            name: "LoginError",
            message: "Invalid email or password"
          }
        };
      }

      const { access_token } = await response.json();

      // Store namespaced keys
      localStorage.setItem(TOKEN_KEY, access_token);

      // Decode orgId and store separately (optional but useful)
      const payload = JSON.parse(atob(access_token.split(".")[1]));
      if (payload.orgId) {
        localStorage.setItem(ORG_KEY, payload.orgId);
      }

      return { success: true, redirectTo: "/" };
    } catch (error: unknown) {
      return {
        success: false,
        error: {
          name: "NetworkError",
          message:
            error instanceof Error
              ? error.message
              : "Unable to connect to server"
        }
      };
    }
  },

  async logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ORG_KEY);
    return {
      success: true,
      redirectTo: "/login"
    };
  },

  async check() {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
      return {
        authenticated: false,
        redirectTo: "/login"
      };
    }

    // Check if token is expired
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Math.floor(Date.now() / 1000);

      if (payload.exp && payload.exp < currentTime) {
        console.warn("🚨 Token expired - logging out");
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(ORG_KEY);
        return {
          authenticated: false,
          redirectTo: "/login"
        };
      }
    } catch (error) {
      console.error("🚨 Invalid token format - logging out");
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(ORG_KEY);
      return {
        authenticated: false,
        redirectTo: "/login"
      };
    }

    return {
      authenticated: true,
      redirectTo: undefined
    };
  },

  async getIdentity(): Promise<UserIdentity | null> {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log(payload);

      const username = payload.name || payload.email?.split("@")[0] || "User";

      return {
        id: payload.sub,
        email: payload.email,
        role: payload.role as Role,
        orgId: payload.orgId,
        name: username
      };
    } catch {
      return null;
    }
  },

  async getPermissions(): Promise<Role | null> {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.role as Role;
    } catch {
      return null;
    }
  },

  onError: async (error: Error): Promise<OnErrorResponse> => {
    return {
      error: {
        name: error.name,
        message: error.message
      },
      logout: false
    };
  }
};
