import { permanentRedirect } from "next/navigation";

function DashboardPage() {
  permanentRedirect("/");
}

export default DashboardPage;
