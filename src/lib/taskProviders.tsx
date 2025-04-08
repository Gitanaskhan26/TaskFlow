
import { 
  Workflow, 
  Notebook, 
  Trello, 
  ListChecks, 
  CheckSquare 
} from "lucide-react";

export interface TaskProvider {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  authUrl?: string;
}

export const googleTasksProvider: TaskProvider = {
  id: "google-tasks",
  name: "Google Tasks",
  icon: <CheckSquare className="h-5 w-5 text-blue-600" />,
  description: "Import and sync your tasks with Google Tasks. Requires a Google account.",
  authUrl: "https://accounts.google.com/o/oauth2/auth"
};

export const notionProvider: TaskProvider = {
  id: "notion",
  name: "Notion",
  icon: <Notebook className="h-5 w-5 text-gray-800" />,
  description: "Connect to your Notion workspace and sync tasks with databases.",
  authUrl: "https://api.notion.com/v1/oauth/authorize"
};

export const microsoftTodoProvider: TaskProvider = {
  id: "microsoft-todo",
  name: "Microsoft To Do",
  icon: <ListChecks className="h-5 w-5 text-blue-700" />,
  description: "Sync with Microsoft To Do lists. Requires a Microsoft account.",
  authUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize"
};

export const todoistProvider: TaskProvider = {
  id: "todoist",
  name: "Todoist",
  icon: <CheckSquare className="h-5 w-5 text-red-600" />,
  description: "Seamlessly import and export tasks with your Todoist account.",
  authUrl: "https://todoist.com/oauth/authorize"
};

export const tickTickProvider: TaskProvider = {
  id: "ticktick",
  name: "TickTick",
  icon: <Trello className="h-5 w-5 text-blue-500" />,
  description: "Sync your tasks with TickTick, the productivity app.",
  authUrl: "https://ticktick.com/oauth/authorize"
};

// This would contain actual implementation code for each provider
export const importTasksFromProvider = async (providerId: string, apiKey?: string) => {
  console.log(`Importing tasks from ${providerId}`);
  // This would be implemented for each provider
  return [];
};

export const exportTasksToProvider = async (providerId: string, tasks: any[], apiKey?: string) => {
  console.log(`Exporting ${tasks.length} tasks to ${providerId}`);
  // This would be implemented for each provider
  return true;
};
