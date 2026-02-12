import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Send } from "lucide-react"
import TabTable from "./TabTable"
import TabsForm from "./TabsForms"

const TabContainer = () => {




    return (<Tabs className="w-full max-w-2xl h-9/12 overflow-y-scroll" defaultValue="profile">
        <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile">
                <Eye />
                Watch</TabsTrigger>
            <TabsTrigger value="settings">
                <Send />Sends</TabsTrigger>
            {/* <TabsTrigger value="billing">Billing</TabsTrigger> */}
        </TabsList>
        <TabsContent value="profile">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <TabTable />
            </div>
        </TabsContent>
        <TabsContent value="settings">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <TabsForm />
            </div>

        </TabsContent>
    </Tabs>)
}

export default TabContainer
