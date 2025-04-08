
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IntegrationProvider from "@/components/IntegrationProvider";
import { googleTasksProvider, notionProvider, microsoftTodoProvider, tickTickProvider, todoistProvider } from "@/lib/taskProviders";

const Integrations = () => {
  const [activeTab, setActiveTab] = useState<string>("connected");
  
  const providers = [
    googleTasksProvider,
    notionProvider, 
    microsoftTodoProvider,
    todoistProvider,
    tickTickProvider
  ];
  
  const [connectedProviders, setConnectedProviders] = useState<string[]>([]);
  
  const handleConnect = (providerId: string) => {
    // In a real app, this would initiate OAuth flow or API key validation
    setTimeout(() => {
      setConnectedProviders((prev) => [...prev, providerId]);
      toast.success(`Successfully connected to ${providerId}`);
      setActiveTab("connected");
    }, 1000);
  };
  
  const handleDisconnect = (providerId: string) => {
    setTimeout(() => {
      setConnectedProviders((prev) => prev.filter(id => id !== providerId));
      toast.success(`Successfully disconnected from ${providerId}`);
    }, 1000);
  };

  const handleImportTasks = (providerId: string) => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: `Importing tasks from ${providerId}...`,
        success: `Successfully imported tasks from ${providerId}`,
        error: `Failed to import tasks from ${providerId}`
      }
    );
  };
  
  const handleExportTasks = (providerId: string) => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: `Exporting tasks to ${providerId}...`,
        success: `Successfully exported tasks to ${providerId}`,
        error: `Failed to export tasks to ${providerId}`
      }
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-16 pb-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
              <p className="text-gray-600 mt-1">Connect and sync with your favorite task services</p>
            </div>
          </div>
          
          <Tabs defaultValue="connected" value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList>
              <TabsTrigger value="connected">Connected ({connectedProviders.length})</TabsTrigger>
              <TabsTrigger value="available">Available ({providers.length - connectedProviders.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="connected" className="mt-6">
              {connectedProviders.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {providers
                    .filter(provider => connectedProviders.includes(provider.id))
                    .map(provider => (
                      <IntegrationProvider
                        key={provider.id}
                        provider={provider}
                        isConnected={true}
                        onConnect={handleConnect}
                        onDisconnect={handleDisconnect}
                        onImport={handleImportTasks}
                        onExport={handleExportTasks}
                      />
                    ))
                  }
                </div>
              ) : (
                <Card className="bg-white">
                  <CardContent className="pt-6 text-center">
                    <p className="text-gray-500 mb-4">No integrations connected yet</p>
                    <Button variant="outline" onClick={() => setActiveTab("available")}>
                      Browse available integrations
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="available" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {providers
                  .filter(provider => !connectedProviders.includes(provider.id))
                  .map(provider => (
                    <IntegrationProvider
                      key={provider.id}
                      provider={provider}
                      isConnected={false}
                      onConnect={handleConnect}
                      onDisconnect={handleDisconnect}
                      onImport={handleImportTasks}
                      onExport={handleExportTasks}
                    />
                  ))
                }
              </div>
            </TabsContent>
          </Tabs>
          
          <Card className="mt-8 bg-white">
            <CardHeader>
              <CardTitle>Custom API Integration</CardTitle>
              <CardDescription>
                Connect to any task service with a compatible API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="api-url" className="block text-sm font-medium text-gray-700">
                    API Endpoint URL
                  </label>
                  <Input id="api-url" placeholder="https://api.example.com/tasks" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="api-key" className="block text-sm font-medium text-gray-700">
                    API Key or Token
                  </label>
                  <Input id="api-key" type="password" placeholder="Your API key or token" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" className="mr-2">
                Test Connection
              </Button>
              <Button onClick={() => toast.success("Custom API connected successfully")}>
                Connect API
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Integrations;
