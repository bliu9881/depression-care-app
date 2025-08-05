// User Types
export type UserType = 'patient' | 'caretaker' | 'healthcare_provider';

export interface BaseProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  timezone: string;
  createdAt: string;
  updatedAt: string;
}

export interface PatientProfile extends BaseProfile {
  userType: 'patient';
  medicalHistory?: MedicalHistory;
  emergencyContacts: EmergencyContact[];
  currentMedications: string[];
  allergies: string[];
  diagnosisHistory: string[];
  careTeam: CareTeamMember[];
  consentSettings: ConsentSettings;
}

export interface CaretakerProfile extends BaseProfile {
  userType: 'caretaker';
  relationship: string;
  patientConnections: PatientConnection[];
  permissions: CaretakerPermissions;
  notificationSettings: NotificationSettings;
  verificationStatus: 'pending' | 'verified' | 'rejected';
}

export interface HealthcareProviderProfile extends BaseProfile {
  userType: 'healthcare_provider';
  licenseNumber: string;
  specialty: string;
  organization?: string;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  patientConnections: PatientConnection[];
}

// Assessment Types
export type AssessmentType = 'PHQ9' | 'GAD7' | 'CUSTOM';
export type SeverityLevel = 'minimal' | 'mild' | 'moderate' | 'severe';
export type RiskLevel = 'low' | 'medium' | 'high' | 'crisis';

export interface Assessment {
  id: string;
  userId: string;
  type: AssessmentType;
  responses: Record<string, number>;
  calculatedScore: number;
  severity: SeverityLevel;
  riskLevel: RiskLevel;
  recommendations: string[];
  completedAt: string;
  followUpRequired: boolean;
}

// Mood Tracking Types
export interface MoodEntry {
  id: string;
  userId: string;
  date: string;
  metrics: {
    mood: number; // 1-10
    energy: number; // 1-10
    sleep: number; // 1-10
    anxiety: number; // 1-10
  };
  symptoms: string[];
  triggers: string[];
  notes?: string;
  aiInsights?: {
    patterns: string[];
    recommendations: string[];
    riskFactors: string[];
  };
}

// Therapy Types
export type TherapyToolType = 'CBT' | 'MINDFULNESS' | 'JOURNALING' | 'BREATHING';

export interface TherapySession {
  id: string;
  userId: string;
  toolType: TherapyToolType;
  duration: number;
  effectiveness?: number;
  insights: string[];
  aiRecommendations?: Record<string, any>;
  completedAt: string;
}

// File Upload Types
export type FileType = 'journal' | 'artwork' | 'voice_memo' | 'medical_document' | 'photo';

export interface UploadedFile {
  id: string;
  userId: string;
  fileName: string;
  fileType: FileType;
  s3Key: string;
  fileSize: number;
  mimeType: string;
  uploadedAt: string;
  processedAt?: string;
  analysis?: FileAnalysis;
}

export interface FileAnalysis {
  classification: {
    documentType: string;
    confidence: number;
    subCategories: string[];
  };
  sentiment?: {
    score: number; // -1 to 1
    confidence: number;
    emotions: {
      joy: number;
      sadness: number;
      anger: number;
      fear: number;
      surprise: number;
    };
  };
  transcription?: {
    text: string;
    confidence: number;
    speakerLabels?: string[];
  };
  textAnalysis?: {
    keywords: string[];
    themes: string[];
    riskIndicators: string[];
    clinicalTerms: string[];
  };
  imageAnalysis?: {
    objects: string[];
    emotions: string[];
    colors: string[];
    composition: string;
  };
  medicalDocumentAnalysis?: {
    documentType: string;
    extractedData: Record<string, any>;
    relevantFindings: string[];
    structuredData: Record<string, any>;
  };
  agentInsights: {
    orchestratedBy: string;
    agentsUsed: string[];
    summary: string;
    recommendations: string[];
    riskLevel: RiskLevel;
    followUpSuggestions: string[];
    confidenceScore: number;
  };
}

// Care Connection Types
export interface CareConnection {
  id: string;
  patientId: string;
  caretakerId: string;
  relationship: string;
  permissions: CaretakerPermissions;
  status: 'pending' | 'active' | 'suspended' | 'terminated';
  invitedAt: string;
  acceptedAt?: string;
  lastAccessedAt?: string;
}

export interface PatientConnection {
  patientId: string;
  patientName: string;
  relationship: string;
  permissions: CaretakerPermissions;
  status: 'active' | 'pending' | 'suspended';
  connectedAt: string;
}

// Supporting Types
export interface MedicalHistory {
  conditions: string[];
  medications: string[];
  allergies: string[];
  surgeries: string[];
  familyHistory: string[];
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email?: string;
  isPrimary: boolean;
}

export interface CareTeamMember {
  id: string;
  name: string;
  role: string;
  organization?: string;
  phone?: string;
  email?: string;
  specialization?: string;
}

export interface ConsentSettings {
  shareWithCareTeam: boolean;
  shareWithCaretakers: boolean;
  shareWithResearchers: boolean;
  emergencyContactPermission: boolean;
  dataRetentionPeriod: number; // in months
}

export interface CaretakerPermissions {
  viewMoodData: boolean;
  viewAssessments: boolean;
  viewFiles: boolean;
  receiveAlerts: boolean;
  emergencyContact: boolean;
}

export interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
  emergencyAlerts: boolean;
  dailyReminders: boolean;
  weeklyReports: boolean;
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, any>;
  };
  timestamp: string;
  requestId: string;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    custom?: (value: any) => boolean | string;
  };
}

// Component Props Types
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
  data?: any;
}