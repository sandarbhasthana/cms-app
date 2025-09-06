import {
  DataProvider,
  GetListParams,
  GetOneParams,
  GetOneResponse,
  CreateParams,
  CreateResponse,
  UpdateParams,
  UpdateResponse,
  DeleteOneParams,
  DeleteOneResponse,
  CustomParams,
  CustomResponse,
  BaseRecord,
  CrudFilters,
  CrudSorting
} from "@refinedev/core";
import axios from "../utils/axios";

interface PaginationParams {
  current?: number;
  pageSize?: number;
}

const buildParamsDefault = (
  pagination: GetListParams["pagination"],
  filters?: CrudFilters,
  sorters?: CrudSorting
) => {
  const { current = 1, pageSize = 10 } = (pagination as PaginationParams) ?? {};
  const sort = sorters?.[0];

  // existing filters your other resources use
  const search = filters?.find(
    (f) => "field" in f && f.field === "search"
  )?.value;
  const role = filters?.find((f) => "field" in f && f.field === "role")?.value;

  return {
    _page: current,
    _limit: pageSize,
    _sort: sort?.field,
    _order: sort?.order,
    ...(search ? { search } : {}),
    ...(role ? { role } : {})
  };
};

const buildParamsForVessels = (
  pagination: GetListParams["pagination"],
  filters?: CrudFilters
) => {
  const { current = 1, pageSize = 10 } = (pagination as PaginationParams) ?? {};
  const params: Record<string, unknown> = {
    skip: (current - 1) * pageSize,
    take: pageSize
  };

  // Accept either 'q' (preferred) or legacy 'search' and map to backend 'q'
  const qVal =
    filters?.find(
      (f) => "field" in f && (f.field === "q" || f.field === "search")
    )?.value ?? undefined;
  if (qVal) params.q = qVal;

  const vesselType = filters?.find(
    (f) => "field" in f && f.field === "vesselType"
  )?.value;
  if (vesselType) params.vesselType = vesselType;

  const dueInDays = filters?.find(
    (f) => "field" in f && f.field === "dueInDays"
  )?.value;
  if (dueInDays) params.dueInDays = Number(dueInDays);

  const overdue = filters?.find(
    (f) => "field" in f && f.field === "overdue"
  )?.value;
  if (overdue === true) params.overdue = true;

  return params;
};

const buildParamsForCrew = (
  _pagination: GetListParams["pagination"],
  filters?: CrudFilters,
  sorters?: CrudSorting
) => {
  // Crew API doesn't use pagination parameters - it returns { data, total }
  const params: Record<string, unknown> = {};

  // Debug logging to see what filters are being sent
  console.log("Crew filters:", filters);

  // Handle search query
  const qVal = filters?.find((f) => "field" in f && f.field === "q")?.value;
  if (qVal) params.q = qVal;

  // Handle rank filter
  const rank = filters?.find((f) => "field" in f && f.field === "rank")?.value;
  if (rank) params.rank = rank;

  // Handle department filter
  const primaryDepartment = filters?.find(
    (f) => "field" in f && f.field === "primaryDepartment"
  )?.value;
  if (primaryDepartment) params.primaryDepartment = primaryDepartment;

  // Handle status filter
  const status = filters?.find(
    (f) => "field" in f && f.field === "status"
  )?.value;
  if (status) params.status = status;

  // Handle sorting
  const sort = sorters?.[0];
  if (sort?.field) {
    // Handle nested fields like ["user", "email"] -> "user.email"
    const sortField = Array.isArray(sort.field)
      ? sort.field.join(".")
      : sort.field;
    params._sort = sortField;
    params._order = sort.order || "asc";
  }

  return params;
};

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
    pagination,
    filters,
    sorters
  }: GetListParams): Promise<{ data: TData[]; total: number }> => {
    // Route resources to their parameter builders
    let params: Record<string, unknown>;
    if (resource === "vessels") {
      params = buildParamsForVessels(pagination, filters);
    } else if (resource === "crew") {
      params = buildParamsForCrew(pagination, filters, sorters);
    } else {
      params = buildParamsDefault(pagination, filters, sorters);
    }

    const response = await axios.get(`/${resource}`, { params });

    // Handle different response formats
    if (resource === "crew") {
      // Crew API returns { data: [...], total: number }
      return {
        data: response.data.data,
        total: response.data.total
      };
    }

    // Default format for other resources
    // If backend doesn’t return X-Total-Count yet, fall back to current page length.
    // (We can add a count endpoint or set the header later for perfect pagination UX.)
    return {
      data: response.data,
      total: Number(response.headers["x-total-count"] || response.data.length)
    };
  },

  getOne: async <TData extends BaseRecord = BaseRecord>(
    params: GetOneParams
  ): Promise<GetOneResponse<TData>> => {
    const { resource, id } = params;
    const response = await axios.get(`/${resource}/${id}`);
    return { data: response.data };
  },

  create: async <
    TData extends BaseRecord = BaseRecord,
    TVariables = Record<string, unknown>
  >(
    params: CreateParams<TVariables>
  ): Promise<CreateResponse<TData>> => {
    const { resource, variables } = params;

    // keep if you still need the debug logs; otherwise remove or guard by env
    // const token = localStorage.getItem("cms_access_token");
    // console.log("🔐 create(): Token:", token);
    // console.log("📦 create(): Payload:", variables);

    const response = await axios.post(`/${resource}`, variables);
    return { data: response.data };
  },

  update: async <
    TData extends BaseRecord = BaseRecord,
    TVariables = Record<string, unknown>
  >(
    params: UpdateParams<TVariables>
  ): Promise<UpdateResponse<TData>> => {
    const { resource, id, variables } = params;

    // Use PUT for crew resource, PATCH for others
    const method = resource === "crew" ? "put" : "patch";
    const response = await axios[method](`/${resource}/${id}`, variables);
    return { data: response.data };
  },

  deleteOne: async <
    TData extends BaseRecord = BaseRecord,
    TVariables = Record<string, unknown>
  >(
    params: DeleteOneParams<TVariables>
  ): Promise<DeleteOneResponse<TData>> => {
    const { resource, id } = params;
    const response = await axios.delete(`/${resource}/${id}`);
    return { data: response.data };
  },

  custom: async <TData = unknown>(
    params: CustomParams
  ): Promise<CustomResponse<TData>> => {
    const { url, method, payload, query, headers } = params;

    const config = {
      method: method || "GET",
      url,
      params: query,
      data: payload,
      headers
    };

    const response = await axios(config);
    return { data: response.data };
  },

  getApiUrl: () => import.meta.env.VITE_API_URL
};
