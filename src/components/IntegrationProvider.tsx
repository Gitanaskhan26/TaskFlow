
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Link, Import, Upload } from "lucide-react";
import { TaskProvider } from "@/lib/taskProviders";

interface IntegrationProviderProps {
  provider: TaskProvider;
  isConnected: boolean;
  onConnect: (providerId: string) => void;
  onDisconnect: (providerId: string) => void;
  onImport: (providerId: string) => void;
  onExport: (providerId: string) => void;
}

const IntegrationProvider = ({
  provider,
  isConnected,
  onConnect,
  onDisconnect,
  onImport,
  onExport
}: IntegrationProviderProps) => {
  return (
    <Card className="bg-white transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              {provider.icon}
            </div>
            <div>
              <CardTitle className="text-lg">{provider.name}</CardTitle>
              {isConnected && (
                <div className="flex items-center text-xs text-green-600 mt-1">
                  <BadgeCheck className="h-3 w-3 mr-1" />
                  Connected
                </div>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-xs text-gray-500">
          {provider.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-2 flex flex-wrap gap-2">
        {isConnected ? (
          <>
            <Button size="sm" variant="outline" onClick={() => onImport(provider.id)} className="text-xs flex gap-1">
              <Import className="h-3 w-3" /> Import
            </Button>
            <Button size="sm" variant="outline" onClick={() => onExport(provider.id)} className="text-xs flex gap-1">
              <Upload className="h-3 w-3" /> Export
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-red-600 text-xs hover:text-red-700 hover:bg-red-50"
              onClick={() => onDisconnect(provider.id)}
            >
              Disconnect
            </Button>
          </>
        ) : (
          <Button size="sm" onClick={() => onConnect(provider.id)} className="text-xs flex gap-1">
            <Link className="h-3 w-3" /> Connect
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default IntegrationProvider;
