# sonny-image-resizer

Test service running on Heroku at [sonny-image-resizer.herokuapp.com/image/sample2.jpg?q=75&s=480](http://sonny-image-resizer.herokuapp.com/image/sample2.jpg?q=75&s=480)

Try to change the q(quality) and s(size) queries to see the script in action

It is now possible to request an external image from anywhere in the web. Just use the `target` query on the `/image` endpoint like in the following example:

[sonny-image-resizer.herokuapp.com/image?target=https://pixabay.com/get/e834b8082ff1023ed1534705fb0938c9bd22ffd41db419429df9c97da1/aurora-1197753_1920.jpg&s=800&q=85](http://sonny-image-resizer.herokuapp.com/image?target=https://pixabay.com/get/e834b8082ff1023ed1534705fb0938c9bd22ffd41db419429df9c97da1/aurora-1197753_1920.jpg&s=800&q=85)
