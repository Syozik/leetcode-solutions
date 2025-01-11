let flashes: number = 0;
const cleanEnergy = function(octopuses: [number[]]): void{
    for (let i=0; i<octopuses.length; i++){
        for (let j=0; j<octopuses[i].length; j++){
            if (octopuses[i][j] >= 10){
                octopuses[i][j] = 0;
            }
        }
    }
}
const addEnergy = function (octopuses: [number[]], i: number, j: number): void {
  octopuses[i][j] += 1;
  if (octopuses[i][j] === 10) {
    flashes += 1;
    flashNeighbors(octopuses, i, j);
  }
};

const flashNeighbors = function (
  octopuses: [number[]],
  i: number,
  j: number
): void {
  if (i > 0) {
    if (j > 0) {
      addEnergy(octopuses, i - 1, j - 1);
      addEnergy(octopuses, i, j - 1);
      if (i < 9) {
        addEnergy(octopuses, i + 1, j - 1);
      }
    }
    if (i < 9) {
      addEnergy(octopuses, i + 1, j);
    }
    addEnergy(octopuses, i - 1, j);
    if (j < 9) {
      addEnergy(octopuses, i - 1, j + 1);
      addEnergy(octopuses, i, j + 1);
      if (i < 9) {
        addEnergy(octopuses, i + 1, j + 1);
      }
    }
  } else {
    if (j > 0) {
      addEnergy(octopuses, i, j - 1);
      addEnergy(octopuses, i + 1, j - 1);
    }
    addEnergy(octopuses, i + 1, j);
    if (j < 9) {
      addEnergy(octopuses, i, j + 1);
      addEnergy(octopuses, i + 1, j + 1);
    }
  }
};

const numberOfFlashes = function (octopuses: [number[]]): number {
  const [width, length]: [number, number] = [10, 10];

  for (let day = 0; day < 100; day++) {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < length; j++) {
        addEnergy(octopuses, i, j);
      }
    }
    cleanEnergy(octopuses);
  }
  return flashes;
};

const stringToMatrix = function (octopuses: string): [number[]] {
  let octopusesArray: string[] = octopuses.split("\n");
  let octopusesMatrix: [number[]] = [[]];
  for (let i = 0; i < octopusesArray.length; i++) {
    octopusesMatrix[i] = octopusesArray[i].split("").map(Number);
  }
  return octopusesMatrix;
};

const octopuses: [number[]] = stringToMatrix(`1564524226
1384554685
7582264835
8812672272
1161463137
7831762344
2855527748
6141737874
8611458313
8215372443`);

console.log(numberOfFlashes(octopuses));
