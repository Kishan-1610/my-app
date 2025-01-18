import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ExplanationSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="server-actions">
        <AccordionTrigger>How Server Actions Work</AccordionTrigger>
        <AccordionContent>
          Server Actions in Next.js 15.1 allow you to define asynchronous server functions that can be called directly from your components. In this example, the `submitName` function in `actions.ts` is a server action that processes the form data and returns a greeting message. This function runs on the server, ensuring that sensitive operations or data processing occur in a secure environment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="shadcn-ui">
        <AccordionTrigger>Shadcn UI Components Used</AccordionTrigger>
        <AccordionContent>
          This application uses several Shadcn UI components for consistent styling:
          <ul className="list-disc pl-5 mt-2">
            <li>Button: For the submit button</li>
            <li>Input: For the name input field</li>
            <li>Card, CardHeader, CardContent, CardTitle: To structure the form</li>
            <li>Accordion: For this explanation section</li>
          </ul>
          Shadcn UI provides a set of accessible, customizable components that work seamlessly with Next.js and Tailwind CSS.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="nextjs-features">
        <AccordionTrigger>Key Next.js 15.1 Features</AccordionTrigger>
        <AccordionContent>
          This application showcases several key features of Next.js 15.1:
          <ul className="list-disc pl-5 mt-2">
            <li>Server Actions: For processing form submissions on the server</li>
            <li>App Router: The new file-based routing system used in the app directory</li>
            <li>Client Components: The NameForm component is a client component that uses state and interacts with server actions</li>
            <li>Server Components: The main page and ExplanationSection are server components, which can improve performance and SEO</li>
            <li>TypeScript Support: The entire application is built with TypeScript for improved type safety</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

