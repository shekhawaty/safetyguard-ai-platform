import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Loader2 } from 'lucide-react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import { useToast } from '@/hooks/use-toast';

interface LogoUploaderProps {
  onLogoProcessed: (logoUrl: string) => void;
}

const LogoUploader = ({ onLogoProcessed }: LogoUploaderProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    
    try {
      toast({
        title: "Processing logo...",
        description: "Removing background, this may take a moment.",
      });

      // Load the image
      const imageElement = await loadImage(file);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create URL for the processed image
      const processedUrl = URL.createObjectURL(processedBlob);
      
      // Call the callback with the new logo URL
      onLogoProcessed(processedUrl);
      
      toast({
        title: "Success!",
        description: "Logo background removed successfully.",
      });
    } catch (error) {
      console.error('Error processing logo:', error);
      toast({
        title: "Error",
        description: "Failed to process logo. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-background/95 backdrop-blur border rounded-lg p-4 shadow-lg max-w-sm">
        <p className="text-sm text-muted-foreground mb-3">
          Upload your logo to replace the current one with transparent background
        </p>
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            id="logo-upload"
            disabled={isProcessing}
          />
          <label htmlFor="logo-upload">
            <Button 
              variant="outline" 
              size="sm" 
              disabled={isProcessing}
              className="cursor-pointer"
              asChild
            >
              <span>
                {isProcessing ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Upload className="h-4 w-4 mr-2" />
                )}
                {isProcessing ? 'Processing...' : 'Upload Logo'}
              </span>
            </Button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LogoUploader;