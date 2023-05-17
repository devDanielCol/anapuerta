import PhotoNode, { INodePhotoStyles, IPhotoNode } from "./PhotoNode";
import { GetStyles } from "./StylesPhotos";

export interface INodeData {
  src: string;
  id: string;
  styles: INodePhotoStyles;
}

class PhotoAlgth {
  private head: IPhotoNode;
  public size: number;
  private tail: IPhotoNode;

  constructor() {
    this.size = 0;
  }

  insert(id: string | null = null, src: string, position: number): void {
    const idf = id ? id : String(this.size + 1);
    const Node = new PhotoNode(idf, src, GetStyles(position));

    if (!this.head) {
      this.head = Node;
      this.tail = Node;
    } else {
      Node.next = this.head;
      this.head.prev = Node;
      this.head = Node;
    }
    this.size++;
  }

  selectNode(id: string) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.id === id) {
        const prevNode = currentNode.prev;
        const nextNode = currentNode.next;

        this.tail?.SetStyles(currentNode.styles);

        if (this.head && this.head.id === id) {
          this.head = this.head?.next;
        } else if (this.tail && this.tail.id === id) {
          this.tail = this.tail.prev;
        } else {
          prevNode && (prevNode.next = nextNode);
          nextNode && (nextNode.prev = prevNode);
        }
        this.insert(id, currentNode.src, 0);

        return;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  traverse(): INodeData[] {
    let currentNode = this.head;
    const nodes = new Array<INodeData>();

    while (currentNode) {
      nodes.unshift({
        src: currentNode.src,
        id: currentNode.id,
        styles: currentNode.styles,
      });
      currentNode = currentNode.next;
    }
    return nodes;
  }
}

export default PhotoAlgth;
