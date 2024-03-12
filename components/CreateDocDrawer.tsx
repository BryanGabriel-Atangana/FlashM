"use client";
import * as React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ColorGrid from "./ColorGrid";
// import ColorGrid from "./ColorGrid";
// import useDocumentStore from "@/store/useDocument";

export function DrawerDemo() {
  // const { docTitle, setDocTitle, createDocument } = useDocumentStore();
  const [selectedColor, setSelectedColor] = React.useState("#FF5733");

  // const handleCreateDoc = async () => {
  //   await createDocument(selectedColor);
  // };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full h-[4rem]">
          <svg
            width="17"
            height="17"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm py-4">
          <DrawerHeader>
            <DrawerTitle>Ajouter un document</DrawerTitle>
            <DrawerDescription>
              Tips 💡 : Les documents sont important pour organiser vos
              flashcards
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <label htmlFor="dotTtitle"></label>
            <input
              name="docTitle"
              type="text"
              placeholder="Nom du document"
              className="w-full h-8 border-b-2 outline-none"
              // value={docTitle}
              // onChange={(e) => setDocTitle(e.target.value)}
              // formAction={}
            />
          </div>
          <div>
            <ColorGrid
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </div>

          <DrawerFooter>
            {/* onClick={handleCreateDoc} */}
            <Button>Ajouter</Button>
            <DrawerClose asChild>
              <Button variant="outline">Annuler</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
