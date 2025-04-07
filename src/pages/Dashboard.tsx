
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { TaskStatusChart, TaskCompletionChart, TaskPriorityChart } from "@/components/Chart";
import TaskCard, { Task } from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

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
];

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

  useEffect(() => {
    // Simulate API call to load tasks
    const loadTasks = () => {
      setTimeout(() => {
        setTasks(mockTasks);
        setIsLoading(false);
      }, 800);
    };
    
    loadTasks();
  }, []);

  // Chart data calculations
  const statusData = [
    { name: "Todo", value: tasks.filter(task => task.status === "todo").length },
    { name: "In Progress", value: tasks.filter(task => task.status === "in-progress").length },
    { name: "Completed", value: tasks.filter(task => task.status === "completed").length },
  ];

  const priorityData = [
    { name: "High", value: tasks.filter(task => task.priority === "high").length },
    { name: "Medium", value: tasks.filter(task => task.priority === "medium").length },
    { name: "Low", value: tasks.filter(task => task.priority === "low").length },
  ];

  const weeklyData = [
    { name: "Week 1", created: 5, completed: 3 },
    { name: "Week 2", created: 8, completed: 5 },
    { name: "Week 3", created: 6, completed: 7 },
    { name: "Week 4", created: 9, completed: 6 },
  ];

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
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-16 pb-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Monitor your tasks and progress</p>
            </div>
            <Button 
              onClick={handleCreateTask} 
              className="mt-4 md:mt-0 bg-brand-600 hover:bg-brand-700"
            >
              <Plus className="mr-1 h-4 w-4" /> Add New Task
            </Button>
          </div>

          {/* Analytics Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TaskStatusChart data={statusData} />
              <TaskPriorityChart data={priorityData} />
              <TaskCompletionChart data={weeklyData} />
            </div>
          </section>

          {/* Tasks Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Recent Tasks</h2>
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white rounded-lg shadow-sm p-4 h-40 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                  </div>
                ))}
              </div>
            ) : tasks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map((task) => (
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
              <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                <p className="text-gray-500">No tasks found. Create a new task to get started.</p>
              </div>
            )}
          </section>
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

export default Dashboard;
