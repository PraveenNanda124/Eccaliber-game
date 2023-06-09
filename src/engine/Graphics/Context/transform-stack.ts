import { AffineMatrix } from '../../Math/affine-matrix';

export class TransformStack {
  private _transforms: AffineMatrix[] = [];
  private _currentTransform: AffineMatrix = AffineMatrix.identity();

  public save(): void {
    this._transforms.push(this._currentTransform);
    this._currentTransform = this._currentTransform.clone();
  }

  public restore(): void {
    this._currentTransform = this._transforms.pop();
  }

  public translate(x: number, y: number): AffineMatrix {
    return this._currentTransform.translate(x, y);
  }

  public rotate(angle: number): AffineMatrix {
    return this._currentTransform.rotate(angle);
  }

  public scale(x: number, y: number): AffineMatrix {
    return this._currentTransform.scale(x, y);
  }

  public set current(matrix: AffineMatrix) {
    this._currentTransform = matrix;
  }

  public get current(): AffineMatrix {
    return this._currentTransform;
  }
}
