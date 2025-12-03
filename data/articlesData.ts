import { Server, Code2, Cloud, Smartphone } from 'lucide-react';

export interface ArticleSection {
  type: 'heading' | 'subheading' | 'paragraph' | 'code' | 'list' | 'blockquote';
  content: string;
  language?: string;
  filename?: string;
  items?: string[];
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  icon: any;
  tags: string[];
  content: ArticleSection[];
}

export const articlesData = [
  {
    id: 1,
    title: 'Building Scalable Microservices with NestJS',
    excerpt: 'Learn how to architect and deploy production-ready microservices using NestJS, Docker, and AWS ECS for maximum scalability.',
    date: 'Nov 15, 2024',
    readTime: '8 min read',
    category: 'Backend',
    icon: Server,
    tags: ['NestJS', 'Microservices', 'AWS', 'Docker'],
    content: [
      {
        type: 'paragraph',
        content: 'Microservices architecture has become the de facto standard for building scalable, maintainable applications. In this article, we\'ll explore how to leverage NestJS\'s powerful features to create a production-ready microservices ecosystem.'
      },
      {
        type: 'heading',
        content: 'Why NestJS for Microservices?'
      },
      {
        type: 'paragraph',
        content: 'NestJS provides built-in support for microservices with multiple transport layers, making it an excellent choice for distributed systems. Its modular architecture and dependency injection system align perfectly with microservices principles.'
      },
      {
        type: 'list',
        items: [
          'Built-in support for TCP, Redis, NATS, MQTT, and more',
          'Strong TypeScript support with decorators',
          'Excellent documentation and community',
          'Easy integration with Docker and Kubernetes'
        ]
      },
      {
        type: 'heading',
        content: 'Setting Up Your First Microservice'
      },
      {
        type: 'paragraph',
        content: 'Let\'s start by creating a simple user service. First, install the necessary dependencies:'
      },
      {
        type: 'code',
        language: 'bash',
        filename: 'terminal',
        content: `npm install @nestjs/microservices
npm install @nestjs/config
npm install class-validator class-transformer`
      },
      {
        type: 'paragraph',
        content: 'Now, let\'s create the main microservice configuration:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'main.ts',
        content: `import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 3001,
      },
    },
  );
  
  await app.listen();
  console.log('User microservice is listening on port 3001');
}

bootstrap();`
      },
      {
        type: 'heading',
        content: 'Creating the User Service'
      },
      {
        type: 'paragraph',
        content: 'Next, we\'ll implement a service that handles user operations. Here\'s a clean implementation:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'user.controller.ts',
        content: `import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'create_user' })
  async createUser(@Payload() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'get_user' })
  async getUser(@Payload() id: string) {
    return await this.userService.findOne(id);
  }

  @MessagePattern({ cmd: 'get_all_users' })
  async getAllUsers() {
    return await this.userService.findAll();
  }
}`
      },
      {
        type: 'heading',
        content: 'Dockerizing Your Microservice'
      },
      {
        type: 'paragraph',
        content: 'To deploy our microservice, we need to containerize it. Here\'s an optimized Dockerfile:'
      },
      {
        type: 'code',
        language: 'dockerfile',
        filename: 'Dockerfile',
        content: `FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3001
CMD ["node", "dist/main.js"]`
      },
      {
        type: 'heading',
        content: 'Deploying to AWS ECS'
      },
      {
        type: 'paragraph',
        content: 'AWS ECS provides a robust platform for running containerized microservices. Here\'s a task definition example:'
      },
      {
        type: 'code',
        language: 'json',
        filename: 'task-definition.json',
        content: `{
  "family": "user-service",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [
    {
      "name": "user-service",
      "image": "your-ecr-repo/user-service:latest",
      "portMappings": [
        {
          "containerPort": 3001,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "NODE_ENV",
          "value": "production"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/user-service",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}`
      },
      {
        type: 'blockquote',
        content: 'Pro tip: Always implement health checks and graceful shutdown handlers in your microservices to ensure zero-downtime deployments.'
      },
      {
        type: 'heading',
        content: 'Best Practices'
      },
      {
        type: 'list',
        items: [
          'Implement circuit breakers for external service calls',
          'Use distributed tracing with tools like Jaeger or AWS X-Ray',
          'Implement proper error handling and retry mechanisms',
          'Use message queues for async communication between services',
          'Monitor your services with CloudWatch or Prometheus',
          'Implement API versioning from the start'
        ]
      },
      {
        type: 'paragraph',
        content: 'Building microservices with NestJS provides a solid foundation for scalable applications. By following these patterns and best practices, you can create a robust, maintainable microservices architecture that scales with your business needs.'
      }
    ]
  },
  {
    id: 2,
    title: 'React Server Components: A Deep Dive',
    excerpt: 'Exploring the new React Server Components architecture and how it improves performance in Next.js 14 applications.',
    date: 'Oct 28, 2024',
    readTime: '12 min read',
    category: 'Frontend',
    icon: Code2,
    tags: ['React', 'Next.js', 'Performance'],
    content: [
      {
        type: 'paragraph',
        content: 'React Server Components (RSC) represent a paradigm shift in how we build React applications. This new architecture allows us to build faster, more efficient applications by rendering components on the server by default.'
      },
      {
        type: 'heading',
        content: 'What Are Server Components?'
      },
      {
        type: 'paragraph',
        content: 'Server Components are React components that render exclusively on the server. They never ship JavaScript to the client, resulting in smaller bundle sizes and faster initial page loads.'
      },
      {
        type: 'blockquote',
        content: 'Server Components are not a replacement for Server-Side Rendering (SSR). They\'re a new primitive that works alongside SSR to provide better performance and developer experience.'
      },
      {
        type: 'heading',
        content: 'Creating Your First Server Component'
      },
      {
        type: 'paragraph',
        content: 'In Next.js 14, all components in the app directory are Server Components by default:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'app/page.tsx',
        content: `// This is a Server Component by default
export default async function HomePage() {
  // You can fetch data directly in the component
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());
  
  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}`
      },
      {
        type: 'heading',
        content: 'Client Components'
      },
      {
        type: 'paragraph',
        content: 'When you need interactivity, use the "use client" directive to create a Client Component:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'components/Counter.tsx',
        content: `'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
      },
      {
        type: 'heading',
        content: 'Composing Server and Client Components'
      },
      {
        type: 'paragraph',
        content: 'You can compose Server and Client Components together. Here\'s a common pattern:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'app/dashboard/page.tsx',
        content: `// Server Component
import { Counter } from '@/components/Counter';
import { getUserData } from '@/lib/db';

export default async function Dashboard() {
  // This runs on the server
  const user = await getUserData();
  
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      
      {/* Client Component embedded in Server Component */}
      <Counter />
      
      {/* Server Component data */}
      <UserStats stats={user.stats} />
    </div>
  );
}

// Another Server Component
async function UserStats({ stats }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>Posts: {stats.posts}</div>
      <div>Followers: {stats.followers}</div>
      <div>Following: {stats.following}</div>
    </div>
  );
}`
      },
      {
        type: 'heading',
        content: 'Data Fetching Patterns'
      },
      {
        type: 'paragraph',
        content: 'Server Components enable powerful data fetching patterns. Here\'s how to fetch data in parallel:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'app/blog/[slug]/page.tsx',
        content: `async function getPost(slug: string) {
  const res = await fetch(\`https://api.example.com/posts/\${slug}\`);
  return res.json();
}

async function getComments(slug: string) {
  const res = await fetch(\`https://api.example.com/posts/\${slug}/comments\`);
  return res.json();
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Fetch data in parallel
  const [post, comments] = await Promise.all([
    getPost(params.slug),
    getComments(params.slug)
  ]);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
      <section>
        <h2>Comments ({comments.length})</h2>
        {comments.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
      </section>
    </article>
  );
}`
      },
      {
        type: 'heading',
        content: 'Performance Benefits'
      },
      {
        type: 'list',
        items: [
          'Reduced bundle size: Server Components don\'t ship to the client',
          'Faster initial page loads: Less JavaScript to parse and execute',
          'Improved SEO: Content is rendered on the server',
          'Direct database access: No need for API routes',
          'Automatic code splitting: Each Server Component is a natural split point',
          'Better developer experience: Async/await works naturally'
        ]
      },
      {
        type: 'heading',
        content: 'Streaming with Suspense'
      },
      {
        type: 'paragraph',
        content: 'Combine Server Components with Suspense for progressive rendering:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'app/dashboard/page.tsx',
        content: `import { Suspense } from 'react';
import { RecentActivity } from './RecentActivity';
import { Analytics } from './Analytics';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* This loads immediately */}
      <QuickStats />
      
      {/* These stream in as they're ready */}
      <Suspense fallback={<AnalyticsSkeleton />}>
        <Analytics />
      </Suspense>
      
      <Suspense fallback={<ActivitySkeleton />}>
        <RecentActivity />
      </Suspense>
    </div>
  );
}`
      },
      {
        type: 'blockquote',
        content: 'Remember: Server Components can\'t use hooks, event handlers, or browser-only APIs. Use Client Components for interactive features.'
      },
      {
        type: 'paragraph',
        content: 'React Server Components represent the future of React development. By understanding how to compose Server and Client Components effectively, you can build applications that are both performant and maintainable.'
      }
    ]
  },
  {
    id: 3,
    title: 'Optimizing AWS Lambda Cold Starts',
    excerpt: 'Practical techniques to reduce Lambda cold start times and improve serverless application performance on AWS.',
    date: 'Oct 12, 2024',
    readTime: '10 min read',
    category: 'Cloud',
    icon: Cloud,
    tags: ['AWS', 'Lambda', 'Serverless'],
    content: [
      {
        type: 'paragraph',
        content: 'Cold starts are one of the biggest challenges in serverless computing. When a Lambda function hasn\'t been invoked recently, AWS needs to initialize a new execution environment, which can add significant latency. Let\'s explore how to minimize this impact.'
      },
      {
        type: 'heading',
        content: 'Understanding Cold Starts'
      },
      {
        type: 'paragraph',
        content: 'A cold start occurs when AWS Lambda needs to:'
      },
      {
        type: 'list',
        items: [
          'Download your code from S3',
          'Start a new execution environment',
          'Load your runtime (Node.js, Python, etc.)',
          'Run initialization code',
          'Execute your handler function'
        ]
      },
      {
        type: 'heading',
        content: 'Technique 1: Minimize Package Size'
      },
      {
        type: 'paragraph',
        content: 'The smaller your deployment package, the faster Lambda can download and initialize it. Here\'s how to optimize a Node.js Lambda:'
      },
      {
        type: 'code',
        language: 'javascript',
        filename: 'package.json',
        content: `{
  "name": "optimized-lambda",
  "version": "1.0.0",
  "scripts": {
    "build": "esbuild src/handler.ts --bundle --platform=node --target=node18 --outfile=dist/handler.js --minify --sourcemap"
  },
  "devDependencies": {
    "esbuild": "^0.19.0"
  },
  "dependencies": {
    "@aws-sdk/client-dynamodb": "^3.450.0"
  }
}`
      },
      {
        type: 'paragraph',
        content: 'Using esbuild to bundle and minify your code can reduce package size by 70-90%.'
      },
      {
        type: 'heading',
        content: 'Technique 2: Use Provisioned Concurrency'
      },
      {
        type: 'paragraph',
        content: 'For functions that need consistent low latency, use Provisioned Concurrency:'
      },
      {
        type: 'code',
        language: 'yaml',
        filename: 'serverless.yml',
        content: `functions:
  api:
    handler: dist/handler.main
    provisionedConcurrency: 5
    events:
      - http:
          path: /api/{proxy+}
          method: any
    environment:
      NODE_ENV: production`
      },
      {
        type: 'heading',
        content: 'Technique 3: Optimize Initialization Code'
      },
      {
        type: 'paragraph',
        content: 'Move heavy initialization outside the handler so it only runs during cold starts:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'handler.ts',
        content: `import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

// Initialize outside handler - runs only on cold start
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

// Reuse connections across invocations
export const handler = async (event: any) => {
  const { id } = JSON.parse(event.body);
  
  // This runs on every invocation
  const result = await docClient.send(
    new GetCommand({
      TableName: process.env.TABLE_NAME,
      Key: { id },
    })
  );
  
  return {
    statusCode: 200,
    body: JSON.stringify(result.Item),
  };
};`
      },
      {
        type: 'heading',
        content: 'Technique 4: Use Lambda Layers'
      },
      {
        type: 'paragraph',
        content: 'Extract common dependencies into Lambda Layers to reduce deployment package size:'
      },
      {
        type: 'code',
        language: 'yaml',
        filename: 'serverless.yml',
        content: `layers:
  commonDeps:
    path: layers/common
    name: common-dependencies
    description: Shared dependencies layer
    compatibleRuntimes:
      - nodejs18.x
    retain: true

functions:
  api:
    handler: dist/handler.main
    layers:
      - { Ref: CommonDepsLambdaLayer }`
      },
      {
        type: 'heading',
        content: 'Technique 5: Choose the Right Runtime'
      },
      {
        type: 'paragraph',
        content: 'Different runtimes have different cold start characteristics. Here\'s a comparison:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'comparison.ts',
        content: `// Node.js - Fast cold starts, moderate warm performance
export const handler = async (event) => {
  return { statusCode: 200, body: 'Hello' };
};

// Python - Very fast cold starts
// def handler(event, context):
//     return {'statusCode': 200, 'body': 'Hello'}

// Go - Fastest overall, compiled binary
// func handler(ctx context.Context, event events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
//     return events.APIGatewayProxyResponse{StatusCode: 200, Body: "Hello"}, nil
// }`
      },
      {
        type: 'heading',
        content: 'Technique 6: Implement Smart Keep-Warm'
      },
      {
        type: 'paragraph',
        content: 'Use CloudWatch Events to keep functions warm during business hours:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'warmer.ts',
        content: `export const handler = async (event: any) => {
  // Detect warmer ping
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUp - Lambda is warm!');
    return 'Lambda is warm!';
  }
  
  // Your actual handler logic
  return processRequest(event);
};`
      },
      {
        type: 'code',
        language: 'yaml',
        filename: 'serverless.yml',
        content: `custom:
  warmup:
    default:
      enabled: true
      events:
        - schedule: 'rate(5 minutes)'
      concurrency: 3
      prewarm: true`
      },
      {
        type: 'heading',
        content: 'Technique 7: Use AWS SDK v3 Tree-Shaking'
      },
      {
        type: 'paragraph',
        content: 'AWS SDK v3 allows importing only the clients you need:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'optimized-sdk.ts',
        content: `// ❌ Bad - Imports entire SDK (large bundle)
// import AWS from 'aws-sdk';

// ✅ Good - Import only what you need
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { PutCommand } from '@aws-sdk/lib-dynamodb';

// This reduces bundle size by ~90%`
      },
      {
        type: 'heading',
        content: 'Monitoring and Measuring'
      },
      {
        type: 'paragraph',
        content: 'Always measure your cold start improvements:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'monitoring.ts',
        content: `import { CloudWatch } from '@aws-sdk/client-cloudwatch';

export const handler = async (event: any) => {
  const start = Date.now();
  const isColdStart = !global.isWarm;
  global.isWarm = true;
  
  try {
    const result = await processRequest(event);
    
    // Log cold start metrics
    if (isColdStart) {
      console.log('COLD_START', {
        duration: Date.now() - start,
        memorySize: process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE,
        runtime: process.env.AWS_EXECUTION_ENV,
      });
    }
    
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};`
      },
      {
        type: 'blockquote',
        content: 'Pro tip: For critical low-latency APIs, consider using AWS Lambda with Application Load Balancer and Provisioned Concurrency for consistent sub-100ms response times.'
      },
      {
        type: 'heading',
        content: 'Key Takeaways'
      },
      {
        type: 'list',
        items: [
          'Bundle and minify your code to reduce package size',
          'Use Provisioned Concurrency for latency-sensitive functions',
          'Initialize SDK clients outside the handler',
          'Choose the right runtime for your use case',
          'Implement keep-warm strategies for critical functions',
          'Use AWS SDK v3 with tree-shaking',
          'Always measure and monitor cold start performance'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'State Management in React Native with Expo',
    excerpt: 'Comparing different state management solutions for React Native apps built with Expo, from Context to Zustand.',
    date: 'Sep 30, 2024',
    readTime: '6 min read',
    category: 'Mobile',
    icon: Smartphone,
    tags: ['React Native', 'Expo', 'State Management'],
    content: [
      {
        type: 'paragraph',
        content: 'Choosing the right state management solution is crucial for building maintainable React Native apps. Let\'s explore the most popular options and when to use each one.'
      },
      {
        type: 'heading',
        content: '1. React Context - Built-in Solution'
      },
      {
        type: 'paragraph',
        content: 'For simple apps or isolated feature state, React Context is perfect:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'AuthContext.tsx',
        content: `import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const user = await authApi.login(email, password);
      setUser(user);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};`
      },
      {
        type: 'paragraph',
        content: 'Usage in components:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'LoginScreen.tsx',
        content: `import { useAuth } from '@/contexts/AuthContext';

export function LoginScreen() {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await login(email, password);
  };

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Password"
      />
      <Button
        title={isLoading ? 'Logging in...' : 'Login'}
        onPress={handleLogin}
        disabled={isLoading}
      />
    </View>
  );
}`
      },
      {
        type: 'heading',
        content: '2. Zustand - Simple and Performant'
      },
      {
        type: 'paragraph',
        content: 'Zustand is my go-to choice for most React Native apps. It\'s simple, performant, and has a tiny bundle size:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'store/cartStore.ts',
        content: `import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => set((state) => {
        const existing = state.items.find(i => i.id === item.id);
        if (existing) {
          return {
            items: state.items.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          };
        }
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }),
      
      removeItem: (id) => set((state) => ({
        items: state.items.filter(i => i.id !== id),
      })),
      
      updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map(i =>
          i.id === id ? { ...i, quantity } : i
        ),
      })),
      
      clearCart: () => set({ items: [] }),
      
      get total() {
        return get().items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);`
      },
      {
        type: 'paragraph',
        content: 'Using Zustand in components is incredibly simple:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'CartScreen.tsx',
        content: `import { useCartStore } from '@/store/cartStore';

export function CartScreen() {
  const items = useCartStore(state => state.items);
  const total = useCartStore(state => state.total);
  const removeItem = useCartStore(state => state.removeItem);
  
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>\${item.price} x {item.quantity}</Text>
            <Button title="Remove" onPress={() => removeItem(item.id)} />
          </View>
        )}
      />
      <Text>Total: \${total}</Text>
    </View>
  );
}`
      },
      {
        type: 'heading',
        content: '3. Redux Toolkit - For Complex Apps'
      },
      {
        type: 'paragraph',
        content: 'For large apps with complex state logic, Redux Toolkit is still a solid choice:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'store/todosSlice.ts',
        content: `import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodosState {
  items: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://api.example.com/todos');
  return response.json();
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  } as TodosState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch';
      });
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;`
      },
      {
        type: 'heading',
        content: 'Comparison and Recommendations'
      },
      {
        type: 'list',
        items: [
          'Context API: Best for simple, isolated feature state (auth, theme)',
          'Zustand: Perfect for most apps, great developer experience',
          'Redux Toolkit: Use for complex apps with heavy state logic',
          'React Query: Excellent for server state management',
          'Jotai/Recoil: Great for atomic state management'
        ]
      },
      {
        type: 'blockquote',
        content: 'My recommendation: Start with Zustand for client state and React Query for server state. This combination covers 90% of use cases with minimal complexity.'
      },
      {
        type: 'heading',
        content: 'Performance Tips'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'performance.tsx',
        content: `// ❌ Bad - Re-renders on any store change
const Component = () => {
  const store = useStore();
  return <Text>{store.user.name}</Text>;
};

// ✅ Good - Only re-renders when user.name changes
const Component = () => {
  const userName = useStore(state => state.user.name);
  return <Text>{userName}</Text>;
};

// ✅ Even better - Use shallow comparison for objects
import shallow from 'zustand/shallow';

const Component = () => {
  const { name, email } = useStore(
    state => ({ name: state.user.name, email: state.user.email }),
    shallow
  );
  return <Text>{name} - {email}</Text>;
};`
      }
    ]
  },
  {
    id: 5,
    title: 'TailwindCSS Best Practices for Large Projects',
    excerpt: 'How to organize and scale TailwindCSS in enterprise applications with custom plugins and design systems.',
    date: 'Sep 18, 2024',
    readTime: '7 min read',
    category: 'Frontend',
    icon: Code2,
    tags: ['TailwindCSS', 'CSS', 'Design Systems'],
    content: [
      {
        type: 'paragraph',
        content: 'As your project grows, maintaining consistency and organization in your Tailwind CSS becomes crucial. Here are battle-tested strategies for scaling Tailwind in large applications.'
      },
      {
        type: 'heading',
        content: 'Setting Up a Design System'
      },
      {
        type: 'paragraph',
        content: 'Start by defining your design tokens in the Tailwind config:'
      },
      {
        type: 'code',
        language: 'javascript',
        filename: 'tailwind.config.js',
        content: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      
      // Brand colors
      brand: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        900: '#0c4a6e',
      },
      
      // Semantic colors
      primary: {
        DEFAULT: '#0ea5e9',
        hover: '#0284c7',
        active: '#0369a1',
      },
      
      // Neutral palette
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      
      // Status colors
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
    
    spacing: {
      xs: '0.25rem',    // 4px
      sm: '0.5rem',     // 8px
      md: '1rem',       // 16px
      lg: '1.5rem',     // 24px
      xl: '2rem',       // 32px
      '2xl': '3rem',    // 48px
      '3xl': '4rem',    // 64px
    },
    
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      
      borderRadius: {
        DEFAULT: '0.5rem',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        md: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        lg: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
        xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
    },
  },
  plugins: [],
};`
      },
      {
        type: 'heading',
        content: 'Creating Reusable Component Variants'
      },
      {
        type: 'paragraph',
        content: 'Use a library like CVA (Class Variance Authority) for type-safe component variants:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'components/Button.tsx',
        content: `import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
        ghost: 'hover:bg-gray-100',
        danger: 'bg-error text-white hover:bg-red-600',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-11 px-8 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, fullWidth, className })}
        {...props}
      />
    );
  }
);`
      },
      {
        type: 'paragraph',
        content: 'Usage:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'App.tsx',
        content: `<Button variant="primary" size="lg">
  Click me
</Button>

<Button variant="outline" size="sm">
  Cancel
</Button>

<Button variant="danger" fullWidth>
  Delete Account
</Button>`
      },
      {
        type: 'heading',
        content: 'Custom Tailwind Plugins'
      },
      {
        type: 'paragraph',
        content: 'Create custom utilities for common patterns:'
      },
      {
        type: 'code',
        language: 'javascript',
        filename: 'tailwind.config.js',
        content: `const plugin = require('tailwindcss/plugin');

module.exports = {
  // ... other config
  plugins: [
    plugin(function({ addUtilities, addComponents, theme }) {
      // Custom utilities
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
      });
      
      // Custom components
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.md'),
        },
        '.card-header': {
          marginBottom: theme('spacing.4'),
          paddingBottom: theme('spacing.4'),
          borderBottom: \`1px solid \${theme('colors.gray.200')}\`,
        },
      });
    }),
  ],
};`
      },
      {
        type: 'heading',
        content: 'Organizing Styles with @layer'
      },
      {
        type: 'paragraph',
        content: 'Use Tailwind layers to organize custom styles:'
      },
      {
        type: 'code',
        language: 'css',
        filename: 'styles/globals.css',
        content: `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Reset and base styles */
  * {
    @apply border-gray-200;
  }
  
  body {
    @apply bg-gray-50 text-gray-900 antialiased;
  }
  
  h1 { @apply text-4xl font-bold tracking-tight; }
  h2 { @apply text-3xl font-semibold tracking-tight; }
  h3 { @apply text-2xl font-semibold; }
}

@layer components {
  /* Reusable component classes */
  .btn {
    @apply inline-flex items-center justify-center rounded-md 
           px-4 py-2 font-medium transition-colors
           focus-visible:outline-none focus-visible:ring-2;
  }
  
  .input {
    @apply block w-full rounded-md border border-gray-300
           px-3 py-2 placeholder-gray-400
           focus:border-primary focus:ring-2 focus:ring-primary/20;
  }
  
  .container-custom {
    @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
  }
}

@layer utilities {
  /* Custom utility classes */
  .animation-delay-200 {
    animation-delay: 200ms;
  }
  
  .animation-delay-400 {
    animation-delay: 400ms;
  }
  
  .text-gradient {
    @apply bg-gradient-to-r from-primary to-brand-700 
           bg-clip-text text-transparent;
  }
}`
      },
      {
        type: 'heading',
        content: 'Component Composition Pattern'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'components/Card.tsx',
        content: `import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: CardProps) {
  return (
    <h3
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}

export function CardFooter({ className, ...props }: CardProps) {
  return (
    <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
  );
}`
      },
      {
        type: 'paragraph',
        content: 'Usage:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'Example.tsx',
        content: `<Card>
  <CardHeader>
    <CardTitle>Project Statistics</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
  <CardFooter>
    <Button>View Details</Button>
  </CardFooter>
</Card>`
      },
      {
        type: 'heading',
        content: 'Performance Optimization'
      },
      {
        type: 'list',
        items: [
          'Use PurgeCSS to remove unused styles in production',
          'Configure content paths precisely to avoid scanning unnecessary files',
          'Use JIT mode for faster build times',
          'Split vendor styles if using multiple Tailwind instances',
          'Leverage CDN caching for production builds'
        ]
      },
      {
        type: 'blockquote',
        content: 'Keep your Tailwind classes organized by following a consistent order: layout → spacing → sizing → typography → visual → misc. This makes code more readable and easier to maintain.'
      },
      {
        type: 'heading',
        content: 'Pro Tips'
      },
      {
        type: 'list',
        items: [
          'Use @apply sparingly - prefer composition over extraction',
          'Create a cn() utility for conditional classes with clsx and tailwind-merge',
          'Document your design tokens in Storybook or a style guide',
          'Use Tailwind IntelliSense extension for autocomplete',
          'Set up Prettier with prettier-plugin-tailwindcss for automatic class sorting'
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Real-time Features with Express.js and WebSockets',
    excerpt: 'Implementing real-time communication in Express applications using Socket.io and handling scalability challenges.',
    date: 'Sep 5, 2024',
    readTime: '9 min read',
    category: 'Backend',
    icon: Server,
    tags: ['Express.js', 'WebSockets', 'Real-time'],
    content: [
      {
        type: 'paragraph',
        content: 'Real-time features are essential for modern web applications. Let\'s build a scalable real-time chat application using Express.js and Socket.io.'
      },
      {
        type: 'heading',
        content: 'Setting Up Express with Socket.io'
      },
      {
        type: 'paragraph',
        content: 'First, let\'s create a basic Express server with Socket.io integration:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'server.ts',
        content: `import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
  pingTimeout: 60000,
  pingInterval: 25000,
});

app.use(cors());
app.use(express.json());

// REST API routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', sockets: io.sockets.sockets.size });
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`
      },
      {
        type: 'heading',
        content: 'Implementing Authentication'
      },
      {
        type: 'paragraph',
        content: 'Secure your WebSocket connections with JWT authentication:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'middleware/auth.ts',
        content: `import { Socket } from 'socket.io';
import jwt from 'jsonwebtoken';

interface AuthenticatedSocket extends Socket {
  userId?: string;
  username?: string;
}

export const authenticateSocket = (socket: AuthenticatedSocket, next: any) => {
  const token = socket.handshake.auth.token;
  
  if (!token) {
    return next(new Error('Authentication error'));
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    socket.userId = decoded.userId;
    socket.username = decoded.username;
    next();
  } catch (error) {
    next(new Error('Invalid token'));
  }
};

// Apply middleware
io.use(authenticateSocket);`
      },
      {
        type: 'heading',
        content: 'Building a Chat Room System'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'sockets/chatHandler.ts',
        content: `import { Server, Socket } from 'socket.io';

interface Message {
  id: string;
  roomId: string;
  userId: string;
  username: string;
  content: string;
  timestamp: Date;
}

interface Room {
  id: string;
  name: string;
  users: Set<string>;
  messages: Message[];
}

const rooms = new Map<string, Room>();

export function setupChatHandlers(io: Server, socket: any) {
  
  // Join a room
  socket.on('join_room', async ({ roomId }: { roomId: string }) => {
    // Leave previous rooms
    const previousRooms = Array.from(socket.rooms).filter(r => r !== socket.id);
    previousRooms.forEach(room => socket.leave(room));
    
    // Join new room
    socket.join(roomId);
    
    // Get or create room
    if (!rooms.has(roomId)) {
      rooms.set(roomId, {
        id: roomId,
        name: \`Room \${roomId}\`,
        users: new Set(),
        messages: [],
      });
    }
    
    const room = rooms.get(roomId)!;
    room.users.add(socket.userId);
    
    // Notify others
    socket.to(roomId).emit('user_joined', {
      userId: socket.userId,
      username: socket.username,
    });
    
    // Send room info to the user
    socket.emit('room_joined', {
      roomId,
      users: Array.from(room.users),
      messages: room.messages.slice(-50), // Last 50 messages
    });
    
    console.log(\`User \${socket.username} joined room \${roomId}\`);
  });
  
  // Send message
  socket.on('send_message', async ({ roomId, content }: { roomId: string; content: string }) => {
    const room = rooms.get(roomId);
    
    if (!room || !room.users.has(socket.userId)) {
      return socket.emit('error', { message: 'Not in room' });
    }
    
    const message: Message = {
      id: \`\${Date.now()}-\${socket.userId}\`,
      roomId,
      userId: socket.userId,
      username: socket.username,
      content,
      timestamp: new Date(),
    };
    
    // Save message
    room.messages.push(message);
    
    // Broadcast to room
    io.to(roomId).emit('new_message', message);
  });
  
  // Typing indicator
  socket.on('typing_start', ({ roomId }: { roomId: string }) => {
    socket.to(roomId).emit('user_typing', {
      userId: socket.userId,
      username: socket.username,
    });
  });
  
  socket.on('typing_stop', ({ roomId }: { roomId: string }) => {
    socket.to(roomId).emit('user_stopped_typing', {
      userId: socket.userId,
    });
  });
  
  // Handle disconnect
  socket.on('disconnect', () => {
    // Remove user from all rooms
    rooms.forEach((room, roomId) => {
      if (room.users.has(socket.userId)) {
        room.users.delete(socket.userId);
        
        // Notify others
        io.to(roomId).emit('user_left', {
          userId: socket.userId,
          username: socket.username,
        });
      }
    });
  });
}`
      },
      {
        type: 'heading',
        content: 'Client-Side Implementation'
      },
      {
        type: 'paragraph',
        content: 'Here\'s how to use the WebSocket connection on the client:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'hooks/useSocket.ts',
        content: `import { useEffect, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

export function useSocket(token: string) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);
  
  useEffect(() => {
    const socketInstance = io('http://localhost:3001', {
      auth: { token },
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    });
    
    socketInstance.on('connect', () => {
      console.log('Connected to server');
      setConnected(true);
    });
    
    socketInstance.on('disconnect', () => {
      console.log('Disconnected from server');
      setConnected(false);
    });
    
    socketInstance.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });
    
    setSocket(socketInstance);
    
    return () => {
      socketInstance.disconnect();
    };
  }, [token]);
  
  const emit = useCallback((event: string, data: any) => {
    socket?.emit(event, data);
  }, [socket]);
  
  const on = useCallback((event: string, callback: (...args: any[]) => void) => {
    socket?.on(event, callback);
    return () => {
      socket?.off(event, callback);
    };
  }, [socket]);
  
  return { socket, connected, emit, on };
}`
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'components/ChatRoom.tsx',
        content: `import { useSocket } from '@/hooks/useSocket';
import { useState, useEffect } from 'react';

export function ChatRoom({ roomId, token }: { roomId: string; token: string }) {
  const { connected, emit, on } = useSocket(token);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  
  useEffect(() => {
    if (!connected) return;
    
    // Join room
    emit('join_room', { roomId });
    
    // Listen for messages
    const unsubscribeMessages = on('new_message', (message: Message) => {
      setMessages(prev => [...prev, message]);
    });
    
    // Listen for typing
    const unsubscribeTyping = on('user_typing', ({ username }: any) => {
      setTypingUsers(prev => [...prev, username]);
    });
    
    const unsubscribeStopTyping = on('user_stopped_typing', ({ userId }: any) => {
      setTypingUsers(prev => prev.filter(u => u !== userId));
    });
    
    return () => {
      unsubscribeMessages();
      unsubscribeTyping();
      unsubscribeStopTyping();
    };
  }, [connected, roomId]);
  
  const sendMessage = () => {
    if (!input.trim()) return;
    
    emit('send_message', {
      roomId,
      content: input,
    });
    
    setInput('');
  };
  
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map(msg => (
          <div key={msg.id} className="mb-4">
            <strong>{msg.username}:</strong> {msg.content}
          </div>
        ))}
        {typingUsers.length > 0 && (
          <div className="text-gray-500 italic">
            {typingUsers.join(', ')} typing...
          </div>
        )}
      </div>
      
      <div className="p-4 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
}`
      },
      {
        type: 'heading',
        content: 'Scaling with Redis Adapter'
      },
      {
        type: 'paragraph',
        content: 'For production, use Redis to scale across multiple server instances:'
      },
      {
        type: 'code',
        language: 'typescript',
        filename: 'server.ts',
        content: `import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

const pubClient = createClient({ url: process.env.REDIS_URL });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));
  console.log('Redis adapter connected');
});`
      },
      {
        type: 'blockquote',
        content: 'Always implement rate limiting and message validation to prevent abuse in production real-time applications.'
      },
      {
        type: 'heading',
        content: 'Best Practices'
      },
      {
        type: 'list',
        items: [
          'Implement reconnection logic with exponential backoff',
          'Use rooms and namespaces to organize connections',
          'Add rate limiting to prevent spam',
          'Validate all incoming messages',
          'Implement heartbeat checks for connection health',
          'Use Redis adapter for horizontal scaling',
          'Monitor connection counts and message rates',
          'Implement proper error handling and logging'
        ]
      }
    ]
  }
];
