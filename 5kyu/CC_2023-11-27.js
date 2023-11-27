/* Directions Reduction

Once upon a time, on a way through the old wild mountainous west a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way. The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]

You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]

Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task:
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

Notes:
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
*/

function dirReduc1(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH' ||
        arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH' ||
        arr[i] === 'EAST' && arr[i + 1] === 'WEST' ||
        arr[i] === 'WEST' && arr[i + 1] === 'EAST') {
      arr.splice(i, 2);
      count++;
      i--;
    }
  }
  return count === 0 ? arr : dirReduc(arr);
}

function dirReduc2(arr) {
  const opposite = {
    NORTH: 'SOUTH', SOUTH: 'NORTH', EAST: 'WEST', WEST: 'EAST'
  };
  return arr.reduce((res, dir) => {
    if (res[res.length - 1] === opposite[dir]) {
      res.pop;
    } else {
      res.push(dir);
    }
    return res;
  }, []);
}