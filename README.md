# Journey Tracker

## This Mobile Application is used to track journey routes
	- Demo for the App is in demo.pdf

- Backend (ExpressJS/NodeJS/MongoDB)
	- Created a server with Express to communicate with the MongoDB database
	- Created schema for users/tracks for authentication and information storage

- Frontend (React/ReactNative/Hooks/Axios)
	- Created sign up and sign in screens
	- Created track list screen as main screen that will show names for the recorded journey routes
	- Added botton tab navigator for
		- current track list screen
		- a new track screen
		- account screen for user information management and logout
	- Added track detail screen that will show recorded journey routes
	- Integarted the map in new track screen. When recording, a polyline would be drawed in the map
	- Added the map to track detail screen

- Test & Deployment
	- Tested in ios12 in ios simulator and in iphone 7, procedure for simulator:
		- run backend tracker server in track-server folder: ``` npm run dev ```
		- run ngrok by ``` ngrok http 3000 ``` and use the given domain name in ``` track.js ```
		- run ``` expo start ``` in ``` /tracks ``` 
	- Waiting for deployment


