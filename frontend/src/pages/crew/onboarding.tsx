// File: src/pages/crew/OnboardingPage.tsx
import React from "react";
import { useSearchParams } from "react-router-dom";
import { CrewOnboardingWizard } from "../../components/crew/CrewOnboardingWizard";

const OnboardingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const crewId = searchParams.get("id");
  const userId = searchParams.get("userId");

  // Determine the scenario:
  // 1. No params: New crew creation (accessed via Create button)
  // 2. crewId: Existing crew onboarding continuation
  // 3. userId: Start onboarding for existing user (from crew list)
  const isNewCrew = !crewId && !userId;
  const isExistingUserOnboarding = !!userId;

  // Pass the appropriate ID to the wizard
  // For userId scenario, we treat it as new crew creation but with pre-selected user
  const wizardId = crewId;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <h1>
        {isNewCrew
          ? "Add New Crew Member"
          : isExistingUserOnboarding
          ? "Start Crew Onboarding"
          : "Continue Crew Onboarding"}
      </h1>
      <CrewOnboardingWizard
        crewId={wizardId}
        isNewCrew={isNewCrew || isExistingUserOnboarding}
        userId={userId}
      />
    </div>
  );
};

export default OnboardingPage;
