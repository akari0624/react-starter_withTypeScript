type ShapeTypes = {
  name: 'circle',
  radius: number,
} | {
  name: 'retangle',
  width: number,
  height: number,
}

export function doThingsDependOnShape(shape : ShapeTypes) : number {

  switch(shape.name) {

    case 'circle':
      const radius = shape.radius;
      return radius * radius * Math.PI

    case 'retangle':
      return shape.width * shape.height

  }

}
