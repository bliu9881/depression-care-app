# Depression Care App

A comprehensive mental health platform built with AWS Amplify Gen 2 and Next.js 14+, designed to provide AI-powered depression support, mood tracking, and crisis intervention.

## Features

- **AI-Powered Therapeutic Tools**: Personalized interventions using AWS Bedrock and AgentCore
- **Mood Tracking**: Daily mood monitoring with AI-powered insights and pattern recognition
- **Crisis Intervention**: 24/7 crisis support with immediate access to emergency resources
- **Care Team Integration**: Connect with healthcare providers and caregivers
- **File Upload & Analysis**: AI-powered analysis of journals, artwork, and medical documents
- **HIPAA Compliant**: Enterprise-grade security with AWS KMS encryption

## Technology Stack

### Frontend
- **Next.js 14+** with App Router and TypeScript
- **React 18+** with Server Components
- **Tailwind CSS** for styling with therapeutic color palette
- **Framer Motion** for smooth animations
- **Radix UI** components for accessibility

### Backend
- **AWS Amplify Gen 2** with TypeScript
- **AWS Lambda** (Node.js 20.x runtime)
- **GraphQL** with type-safe code generation
- **DynamoDB** for data persistence
- **EventBridge** for event-driven architecture

### AI/ML Services
- **AWS Bedrock** (Claude 3, GPT-4 integration)
- **AWS Bedrock Data Automation** for document processing
- **AWS Bedrock AgentCore** for intelligent agent orchestration
- **Amazon Comprehend** for sentiment analysis
- **Amazon Rekognition** for image analysis

### Security & Compliance
- **AWS Cognito** for authentication
- **AWS KMS** for encryption
- **AWS IAM** for access control
- **HIPAA-compliant** infrastructure

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- AWS CLI configured with appropriate permissions
- AWS Amplify CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd depression-care-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the Amplify sandbox:
```bash
npm run sandbox
```

4. In a new terminal, start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                # Reusable UI components
│   ├── auth/              # Authentication components
│   ├── assessment/        # Depression assessment tools
│   ├── mood/              # Mood tracking components
│   ├── therapy/           # AI therapeutic tools
│   ├── crisis/            # Crisis intervention components
│   ├── files/             # File upload and analysis
│   └── care/              # Care team management
├── lib/                   # Utility functions and configurations
├── types/                 # TypeScript type definitions
├── hooks/                 # Custom React hooks
└── utils/                 # Helper utilities

amplify/
├── auth/                  # Cognito authentication configuration
├── data/                  # GraphQL schema and DynamoDB models
├── functions/             # Lambda functions
└── backend.ts             # Amplify backend configuration
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run sandbox` - Start Amplify sandbox environment

### Environment Setup

The application uses AWS Amplify Gen 2 for backend services. The sandbox environment provides:

- Local development with hot reloading
- Real-time GraphQL subscriptions
- Authentication with Cognito
- File storage with S3
- Lambda functions for business logic

## Security & Privacy

This application is designed with mental health data privacy as a top priority:

- **End-to-end encryption** using AWS KMS
- **HIPAA compliance** with comprehensive audit logging
- **User consent management** for data sharing
- **Crisis detection** with immediate intervention protocols
- **Secure file processing** with AI analysis

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Review the documentation in the `/docs` folder

## Acknowledgments

- Built with AWS Amplify Gen 2 and Next.js 14+
- Designed with accessibility and mental health best practices
- Inspired by evidence-based therapeutic interventions
