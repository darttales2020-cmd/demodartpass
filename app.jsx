import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { QrCode } from "lucide-react";

export default function DartPassDemo() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [verband, setVerband] = useState("");
  const [liga, setLiga] = useState("");

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black p-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="rounded-2xl shadow-xl w-80">
            <CardContent className="p-6 space-y-4">
              <h1 className="text-xl font-bold text-center">DartPass</h1>
              <Input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
              <Input placeholder="Verband" onChange={(e)=>setVerband(e.target.value)} />
              <Input placeholder="Liga" onChange={(e)=>setLiga(e.target.value)} />
              <Button className="w-full" onClick={()=>setLoggedIn(true)}>Registrieren</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black p-4">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Card className="rounded-2xl shadow-xl w-80">
          <CardContent className="p-6 space-y-4 text-center">
            <h2 className="text-lg font-bold">Digitaler Spielerpass</h2>
            <p><b>Name:</b> {name}</p>
            <p><b>Verband:</b> {verband}</p>
            <p><b>Liga:</b> {liga}</p>
            <div className="flex justify-center pt-4">
              <QrCode size={80} />
            </div>
            <Button variant="outline" onClick={()=>setLoggedIn(false)}>Zurück</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
