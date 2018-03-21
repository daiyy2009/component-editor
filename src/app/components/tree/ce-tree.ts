import { Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "ce-tree",
  styleUrls: ["ce-tree.css"],
  templateUrl: "ce-tree.html"
})
export class CeTree {
  // angular transfer data to the tree
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  data = ELEMENT_DATA;
}

export interface Element {
  name: string;
  type: NODE_TYPE;
  suffix?: SUFFIX;
  path?: string;
  children?: Element[];
}

enum NODE_TYPE {folder='folder',file='file'};

enum SUFFIX {html='<>', js='JS', ts='TS', css='CSS'}

const ELEMENT_DATA: Element = {
  name: "button",
  type: NODE_TYPE.folder,
  children:[
    {
      name:"button.css",
      type:NODE_TYPE.file,
      suffix:SUFFIX.css,
    },
    {
      name:"button.ts",
      type:NODE_TYPE.file,
      suffix:SUFFIX.ts,
    },
    {
      name:"button.html",
      type:NODE_TYPE.file,
      suffix:SUFFIX.html,
    }
  ]

};
