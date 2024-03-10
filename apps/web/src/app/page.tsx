import { Button, Header, Input, TextInput } from "@acme/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header text="World" />
      <Button />

      <Input type="number" />
      <TextInput />
      <div className="bg-cyan-400 p-4">
        <p>Testing</p>
      </div>
    </main>
  );
}
