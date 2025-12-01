export class Vector2D {
  public x: number;
  public y: number;
  public z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }


  add(other: Vector2D): Vector2D {
    return new Vector2D(this.x + other.x, this.y + other.y);
  }

  subtract(other: Vector2D): Vector2D {
    return new Vector2D(this.x - other.x, this.y - other.y);
  }

  scale(scalar: number): Vector2D {
    return new Vector2D(this.x * scalar, this.y * scalar);
  }

  strict_equals(other: Vector2D): boolean {
    return this.x === other.x && this.y === other.y;
  }

  toString(): string {
    return `Vector2D { x: ${this.x}, y: ${this.y} }`;
  }

  static zero(): Vector2D {
    return new Vector2D(0, 0);
  }
}

