var Worker = "";
var task = 0;

for (var nameWorker in tasksCompleted) {

    if (task < tasksCompleted[nameWorker]) {

        task = tasksCompleted[nameWorker];
        Worker = nameWorker;
    }
}
console.log(Worker);
