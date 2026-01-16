import { VectomindLanding } from "@/app/components/VectomindLanding";
import { AuraCheck } from "@/app/components/AuraCheck";

export default function App() {
  // Check if we're on the aura subdomain or path
  const isAuraCheck = 
    window.location.hostname.includes('aura.') || 
    window.location.pathname.startsWith('/aura');
  
  return isAuraCheck ? <AuraCheck /> : <VectomindLanding />;
}
