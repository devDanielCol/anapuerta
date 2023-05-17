export type IPhotoNode = PhotoNode | undefined;

export interface INodePhotoStyles {
  left: string;
  top: string;
  width: string;
  height: string;
  transform?: string;
}

class PhotoNode {
  public id: string;
  public src: string;
  public left: string;
  public top: string;
  public width: string;
  public height: string;
  public prev: IPhotoNode;
  public next: IPhotoNode;

  constructor(id: string, src: string, styles: INodePhotoStyles) {
    this.id = id;
    this.src = src;
    this.left = styles.left;
    this.top = styles.top;
    this.width = styles.width;
    this.height = styles.height;
  }

  SetStyles(styles: INodePhotoStyles) {
    this.left = styles.left;
    this.top = styles.top;
    this.height = styles.height;
    this.width = styles.width;
  }

  get styles(): INodePhotoStyles {
    return {
      left: this.left,
      top: this.top,
      width: this.width,
      height: this.height,
    };
  }
}

export default PhotoNode;
