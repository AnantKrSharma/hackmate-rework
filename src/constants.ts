import { FilterOptions, WorkingStyle, CollaborationPref } from './types'

export const WORKING_STYLE_LABELS = {
  ASYNC: "Async",
  REAL_TIME: "Real-time",
  FLEXIBLE: "Flexible",
  STRUCTURED: "Structured"
}

export const COLLABORATION_PREF_LABELS = {
  REMOTE: "Remote",
  HYBRID: "Hybrid",
  IN_PERSON: "In-person",
  DOESNT_MATTER: "Flexible"
}

export const STARTUP_STAGE_LABELS = {
  IDEA: "Idea Stage",
  MVP: "MVP Built",
  SCALING: "Scaling",
  EXITED: "Previous Exit"
}

export const COMMITMENT_LEVEL_LABELS = {
  EXPLORING: "Exploring",
  BUILDING: "Building",
  LAUNCHING: "Launching",
  FULL_TIME_READY: "Full-time Ready"
}

export const DEFAULT_USER_PREFERENCES = {
  workingStyle: "" as WorkingStyle,
  collaborationPref: "" as CollaborationPref,
  skills: [],
  domainExpertise: [],
  location: "",
  enableLocationBasedMatching: false,
  maxDistance: 5,
}

export const DEFAULT_FILTERS: FilterOptions = {
  skills: [],
  domains: [],
  workingStyles: [],
  collaborationPrefs: [],
  experienceRange: [0, 15],
  startupStages: [],
  location: '',
  maxDistance: 50,
  enableLocationBasedMatching: false,
  preferencesFromProfile: true
}
