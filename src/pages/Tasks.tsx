
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TaskCard, { Task } from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";
import { toast } from "sonner";
import { Plus, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Mock data for demo
const mockTasks: Task[] = [
  {
    id: "1",
    title: "Implement dashboard analytics",
    description: "Create charts and graphs for the dashboard analytics section.",
    status: "in-progress",
    priority: "high",
    dueDate: new Date(2025, 4, 15).toISOString(),
  },
  {
    id: "2",
    title: "Design user profile page",
    description: "Create wireframes and design for the user profile page.",
    status: "todo",
    priority: "medium",
    dueDate: new Date(2025, 4, 20).toISOString(),
  },
  {
    id: "3",
    title: "Fix login page bug",
    description: "Address the authentication issue on the login page.",
    status: "completed",
    priority: "high",
    dueDate: new Date(2025, 4, 10).toISOString(),
  },
  {
    id: "4",
    title: "Update documentation",
    description: "Update the project documentation with the latest changes.",
    status: "todo",
    priority: "low",
    dueDate: new Date(2025, 4, 25).toISOString(),
  },
  {
    id: "5",
    title: "Implement dark mode",
    description: "Add dark mode toggle and styles to the application.",
    status: "todo",
    priority: "medium",
    dueDate: new Date(2025, 4, 18).toISOString(),
  },
  {
    id: "6",
    title: "API Integration",
    description: "Connect the application to the backend API.",
    status: "in-progress",
    priority: "high",
    dueDate: new Date(2025, 4, 12).toISOString(),
  },
  {
    id: "7",
    title: "Write unit tests",
    description: "Create unit tests for the critical components.",
    status: "todo",
    priority: "medium",
    dueDate: new Date(2025, 4, 28).toISOString(),
  },
  {
    id: "8",
    title: "Deploy to production",
    description: "Deploy the latest changes to the production environment.",
    status: "completed",
    priority: "high",
    dueDate: new Date(2025, 4, 5).toISOString(),
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    // Simulate API call to load tasks
    const loadTasks = () => {
      setTimeout(() => {
        setTasks(mockTasks);
        setFilteredTasks(mockTasks);
        setIsLoading(false);
      }, 800);
    };
    
    loadTasks();
  }, []);

  useEffect(() => {
    // Apply filters
    let result = [...tasks];
    
    // Search term filter
    if (searchTerm) {
      result = result.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Status filter (from dropdown)
    if (statusFilter !== "all") {
      result = result.filter((task) => task.status === statusFilter);
    }
    
    // Priority filter
    if (priorityFilter !== "all") {
      result = result.filter((task) => task.priority === priorityFilter);
    }
    
    // Tab filter - overrides status filter from dropdown
    if (activeTab !== "all") {
      result = tasks.filter((task) => task.status === activeTab);
    }
    
    setFilteredTasks(result);
  }, [tasks, searchTerm, statusFilter, priorityFilter, activeTab]);

  const handleCreateTask = () => {
    setSelectedTask(undefined);
    setIsDialogOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsDialogOpen(true);
  };

  const handleSubmitTask = (taskData: Omit<Task, 'id'> & { id?: string }) => {
    if (taskData.id) {
      // Update existing task
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskData.id ? { ...taskData, id: task.id } as Task : task
        )
      );
      toast.success("Task updated successfully");
    } else {
      // Create new task
      const newTask = {
        ...taskData,
        id: Date.now().toString(),
      } as Task;
      setTasks(prevTasks => [...prevTasks, newTask]);
      toast.success("Task created successfully");
    }
    setIsDialogOpen(false);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleStatusChange = (id: string, status: Task['status']) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, status } : task
      )
    );
  };
  
  const todoCount = tasks.filter(task => task.status === "todo").length;
  const inProgressCount = tasks.filter(task => task.status === "in-progress").length;
  const completedCount = tasks.filter(task => task.status === "completed").length;
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-16 pb-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
              <p className="text-gray-600 mt-1">Manage and organize your tasks</p>
            </div>
            <Button 
              onClick={handleCreateTask} 
              className="mt-4 md:mt-0 bg-brand-600 hover:bg-brand-700"
            >
              <Plus className="mr-1 h-4 w-4" /> Add New Task
            </Button>
          </div>
          
          {/* Filters */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search tasks..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Status filter */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="todo">Todo</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Priority filter */}
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All ({tasks.length})</TabsTrigger>
              <TabsTrigger value="todo">Todo ({todoCount})</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress ({inProgressCount})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedCount})</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {/* Tasks List */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm p-4 h-40 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                </div>
              ))}
            </div>
          ) : filteredTasks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={handleEditTask}
                  onDelete={handleDeleteTask}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500 mb-2">No tasks found matching your filters</p>
              <Button 
                onClick={handleCreateTask} 
                variant="outline"
                className="mt-2"
              >
                <Plus className="mr-1 h-4 w-4" /> Create a new task
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Task Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedTask ? 'Edit Task' : 'Create New Task'}</DialogTitle>
          </DialogHeader>
          <TaskForm
            task={selectedTask}
            onSubmit={handleSubmitTask}
            onCancel={() => setIsDialogOpen(false)}
            isLoading={false}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tasks;
