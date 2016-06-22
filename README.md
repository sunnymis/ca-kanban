# Tom's Ultimate Website

> Tom Kennedy's personal website 

**Features**
* Learn about Tom in ways you never knew you could
* View the world through Tom's eyes by reading his daily blog
* Hear Tom's vibe through his Spotify playlists
* Explore Tom's favorite pet project: The Texan Heat Map
* Best of all, get in contact with Tom

Technologies
-----

* Framework:&nbsp;&nbsp;&nbsp;&nbsp;AngularJS
* Database:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL
* Server:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Node.js
* CSS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bootstrap


Using Git
-----

##### Make new branch for each new feature
`git branch feature_xyz`

##### Checkout new branch
`git checkout feature_xyz`

##### Delete Branch
`git branch -D feature_xyz`

### Pushing

##### Pushing to remote feature branch
`git push -u origin feature_xyz`

### Merging 
##### Checkout master 
`git checkout master`

##### Pull current content from master
`git pull origin master`

##### Merge feature branch into master
`git merge feature_xyz`

##### Push it
`git push origin master`


Style Guide
-----
> Source: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

### Summary
* Directory for each feature. 
    * html file
        * layout 
    * config.route.js
        * Determines what page you go to
    * feature.module.js
        * Feature's module containing dependency injections
    * feature.js
        * Controller code
    * feature.directive.js
        * Directive code
    


