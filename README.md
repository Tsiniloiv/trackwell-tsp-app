# trackwell-tsp-app
Example project for Trackwell application.

Consisting of a simple Django server and a ReactJS client, intended to solve a Traveling Salesperson Problem of 48 points. The client sends a GET request to the server, which runs a genetic algorithm from the mlrose library to find the best route between all 48 points, then returns the route and its length.

## Startup
Run 'python manage.py runserver' from the trackwell folder, and 'npm start' from the trackwell-client folder.

## Known Issues
Occasionally, the vectors depicting certain legs of the route will be inverted. I've done what I can to minimize the problem, but I suspect it's something connected to the fundamental math, and I'm rustier with vectors than I thought I was.

## Possible Improvements
Some kind of loading indicator, to tell the user that their request is being processed.

The coordinate set is currently hardcoded both clientside and serverside. This could, and should, be fixed.

The parameters of the genetic algorithm could be tweaked to find a better, faster solution. Most solutions it returns hover around the 11.000 mark, fitness-wise, give or take ~500.
