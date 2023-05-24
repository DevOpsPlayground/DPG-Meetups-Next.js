### Prerequisites (Your own machine)
This playground uses the following technologies so you will need to check they are installed:

-   Web Browser
-   Code IDE (we use VS Code)
-   Terminal (we use Bash)
-   Node.js

_**Network**_  The following ports will be used for application and testing:
-   3000 -> React application
-   3001 -> Next.js application


# Getting Started

This playground uses React 18 and Next.js 13. Although no existing knowledge of either application is needed, a basic knowledge of Javascript is beneficial.

# Introduction

The goal of this playground is to explore React Server Components using Next.js, a leading framework for server-side web application development.

In the first part of our session, we highlight the emerging trend in Front-End Development, focusing on the migration of logic from the client to the server. This strategic shift addresses common challenges such as slow load times and Search Engine Optimization concerns, and offers potential solutions.

In the second part, we dive into React Server Components and their pivotal role in transforming React into a comprehensive full-stack framework. We'll unlock the possibilities offered by Server-Side Rendering and React Server Components, showcasing how this approach enables developers to tackle the aforementioned challenges in web development.

# Part 1 

In this section, we explore the inner workings of a traditional React application, focusing on a specific timeframe within the application's lifecycle - specifically the events that unfold between the moment a user enters a URL into the browser and when they witness meaningful content on the page.

<p align="center">
<img width="668" alt="Screenshot 2023-05-23 at 10 06 27" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/9db157cc-5d35-4171-8ebe-b741d77ec4d5">
</p>

We will conclude that... 

# Part 2 

In this part, we transform a traditional React application from being client-side rendered to being server-side rendered using Next.js.

##  Setting up the infrastructure:

### 1. Steps for running the Next.js application in the browser

#### Step 1
Go to: https://lab.devopsplayground.org/ 

This should bring up the following page:

<p align="center">
<img width="581" alt="Screenshot 2023-05-23 at 11 29 42" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/431705d0-fabd-4ee9-83d5-a4b8ec9c1257">
</p>

#### Step 2
Grab your meetup.com username. An example of a meetup.com username is highlighted in yellow below (in this example, it is just the user's name and surname):

<p align="center">
<img width="1721" alt="Screenshot 2023-05-23 at 17 30 23" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/64ea6f09-e762-47a3-8b4d-48f11a933c0b">
</p>

#### Step 3
Insert your meetup.com username into the username box as per the following example. Make sure to use capital letters as required:  

<p align="center">
<img width="640" alt="Screenshot 2023-05-23 at 11 31 32" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/dd37b03c-2e64-46f0-917a-fdd00ac923bd">
</p>

Once done, click submit.


#### Step 4
The submit button should take you to a page that looks like this:

<p align="center">
<img width="544" alt="Screenshot 2023-05-23 at 11 33 12" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/a8e6b536-6926-4ae6-a72a-5c19e7f4d207">
</p>

 Essentially, you should have access to a terminal and IDE (VS Code) links. 
 
 
#### Step 5
Copy and paste the terminal link into the address bar of your browser. This should lead you to the terminal that looks something like this:

<p align="center">
<img width="687" alt="Screenshot 2023-05-23 at 11 35 57" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/7076d659-525e-4f96-a9c4-839c740bd6f7">
</p>

#### Step 6
When prompted, enter the following password: 

> Next23


*Please be aware, your password will not be visibly displayed on the screen as you type it. If you made a mistake, just refresh the page and try again.*

Once you have successfully logged in, your terminal should display the following message:

<p align="center">
<img width="675" alt="Screenshot 2023-05-23 at 11 41 04" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/7fc373ff-4bb2-434d-ba7b-7a1e96a4327c">
</p>

#### Step 7
Run the commands below in the terminal in the following order:

 1. > cd workdir
  2.  > cd DPG-Meetups-Next.js
   3. > npm i
   4. > npm run dev

If all of your commands are executed correctly, your terminal should display the following outputs:

<p align="center">
<img width="1113" alt="Screenshot 2023-05-23 at 11 51 57" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/15dfee9f-7797-4d2a-b0a6-1c4c1f5431f2">
</p>

#### Step 8
**KEEP THE TERMINAL PAGE RUNNING**, and open a new browser tab. 


#### Step 9
Go back to your terminal page, and copy the terminal page URL. The URL should be a link ending in "devopsplayground.org:5050/wetty". For example:

<img width="517" alt="Screenshot 2023-05-23 at 11 53 44" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/46b41768-de12-461b-8e6c-dc2ad5779c92">


#### Step 10
In the new tab you have opened as part of step 7 above, paste the terminal page URL that you have just copied as part of step 8. **DO NOT PRESS ENTER**.


#### Step 11
Edit the URL that you have just copied into the new browser tab as part of step 9 by replacing "5050/wetty" with "3001". Your edited URL should look something like this:

<p align="center">
<img width="424" alt="Screenshot 2023-05-23 at 11 57 33" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/7dbea636-4365-4d91-844a-112eb432169d">
</p>

#### Step 12
Press enter. If your application is running correctly, it should look like this: 

<p align="center">
<img width="1697" alt="Screenshot 2023-05-23 at 11 58 33" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/f97b0bfa-5204-44bb-9dad-72a29ad3b4ae">
</p>

If you are having any issues, please shout out for help 😊. 

### Opening the Next.js application in VS Code

#### Step 1

Go back to https://lab.devopsplayground.org/.

If you need to, enter your name and surname again into the username box. 

You should be presented with the following page: 

<p align="center">
<img width="544" alt="Screenshot 2023-05-23 at 11 33 12" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/a8e6b536-6926-4ae6-a72a-5c19e7f4d207">
</p>

#### Step 2

Copy the IDE link.

Open a new tab and paste that link into the address bar of the new tab. 

You should be presented with VS Code which should look something like this:

<p align="center">
<img width="1720" alt="Screenshot 2023-05-23 at 12 22 14" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/c7c00fcd-cd46-4f57-9ed8-7e80850f9438">
</p>

#  Solutions

##  Aim 1: Fetch data from an API on the server using React Server Component

 1. In VS Code, go to the index.js file which sits inside the pages folder:

<p align="center">
<img width="351" alt="Screenshot 2023-05-23 at 13 47 24" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/cbea5182-6e7d-4527-832e-325eda0f0fec">
</p>

If you are in the right file, you should be presented with this code:

```javascript
import { getFeaturedEvents } from "/helpers/api";
import EventList from "./../components/events/EventList";
import { useState, useEffect } from "react";
import Loader from "/components/Loader";

export default function Homepage() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    getFeaturedEvents().then((events) => {
      setFeaturedEvents(events);
    });
  }, []);

  if (!featuredEvents.length) {
    return <Loader />
  }

  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}
```

2. At the bottom of the file and **OUTSIDE** the Homepage component, create a React Server Component using Next.js ```getStaticProps``` function. 
3. Inside this function, we will then return an object with a key of props:

```javascript
export async function getStaticProps() {
  return {
    props: {
      featuredEvents,
    }
  }
}
```

The complete code will now look like this:

```javascript
import { getFeaturedEvents } from "/helpers/api";
import EventList from "./../components/events/EventList";
import { useState, useEffect } from "react";
import Loader from "/components/Loader";

export default function Homepage() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    getFeaturedEvents().then((events) => {
      setFeaturedEvents(events);
    });
  }, []);

  if (!featuredEvents.length) {
    return <Loader />
  }

  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      featuredEvents,
    }
  }
}

```

4. We will now use the same API call as we are currently using inside of the ``useEffect`` to fetch the ``featuredEvents`` data inside of ``getStaticProps``:

```javascript
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  
  return {
    props: {
      featuredEvents,
    }
  }
}

```

5. Once we have fetched ``featuredEvents`` from the API inside of getStaticProps, we can go back to put Homepage component, and proceed to deconstruct ``featuredEvents`` that we are passing from getStaticProps as props:

```javascript
export default function Homepage({featuredEvents}) {

	...

}

```

6. Once the ``featuredEvent`` data is in the Homepage component, we can remove any references to client-side data fetching from that component. We will therefore delete:
- the ``useState`` hook
- the ``useEffect`` hook
- the ``Loader`` component 
- all imports that we are no longer using namely ``useState``, ``useEffect`` and ``Loader``

Consequently, our code should look like this:


```javascript
import { getFeaturedEvents } from "/helpers/api";
import EventList from "./../components/events/EventList";

export default function Homepage({featuredEvents}) {
  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    }
  }
}

```

Our running application should look like this:

<img width="1724" alt="Screenshot 2023-05-23 at 14 05 29" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/8819a459-1a19-44c8-a953-ed2457212409">


##  Aim 2: Read data from a filesystem on the server using React Server Component

1. Either comment out the current ``getStaticProps`` component or remove all of the code inside of it, so that it is empty for us to work with. 
2. You can also remove the ``getFeaturedEvents`` import at the top of the page so the overall code looks like this:

```javascript
import EventList from "./../components/events/EventList";

export default function Homepage({featuredEvents}) {
  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {

}
```

3. At the top of the page, we will import the ``fs`` module from node:
```javascript
import fs from "fs/promises"
```
4. We will use fs' ``readFile`` method inside of the ``getStaticProps`` and await its data as follows:

```javascript
export async function getStaticProps() {
  const jsonData = await fs.readFile();
}

```

5. We will then construct the path between our current working directory and the file we are trying to read. To achieve this, import ``path`` from the node and create a new variable that we can use to store our constructed path. 
6. We can then ensure that the constructed path is consumed by ``fs.readFile()``:

```javascript
import "path" from "path" 

....

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "events_data.json")
  const jsonData = await fs.readFile(filePath);
}

```
6. We can now parse the data that we've received from ``readFile()`` using the JSON object:

```javascript
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "events_data.json")
  const jsonData = await fs.readFile(filePath);
  const allEvents = JSON.parse(jsonData);
}

```

7. Lastly, we will return the``allEvents`` data using an object with a props key. Our completed ``getStaticProps`` function should look like this:

```javascript
export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "data", "events", "events_data.json")
  const jsonData = await fs.readFile(filepath);
  const allEvents = JSON.parse(jsonData);

  return {
    props: {
      allEvents: allEvents.events
    }
  }
}
```

8. Inside our Homepage component we now need to ensure that:
 - we are destructuring the correct key (``allEvents``): 
 ```javascript
 export  default  function  Homepage({ allEvents }) {
 
 ....
 
 }
 ```
 - and we are filtering out featured events using the featured key:

```javascript
export default function Homepage({allEvents}) {

  const featuredEvents = allEvents.filter(event => event.featured);
  
  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}
```

9. The complete solution should look like this:

```javascript
import EventList from "./../components/events/EventList";
import fs from "fs/promises"
import path from "path"

export default function Homepage({allEvents}) {

  const featuredEvents = allEvents.filter(event => event.featured);
  
  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "events_data.json")
  const jsonData = await fs.readFile(filePath);
  const allEvents = JSON.parse(jsonData);

  return {
    props: {
      allEvents: allEvents.events
    }
  }
}

```

10. Our running application should look like this:

<img width="1696" alt="Screenshot 2023-05-23 at 14 35 53" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/7b6b0317-e414-44ad-a21d-475963024334">


##  Aim 3: Fetch data directly from a database on the server using React Server Component

1. Either comment out the current getStaticProps component, or remove all of the code inside of it, so it is empty for us to work with. 
2. At the top of the file, we will import Mongo Client from monogodb.

```javascript
import { MongoClient } from "mongodb"
```

4. We need to establish a connection with MongoDB inside of getStaticProps. To do this, use the ``MongoClient`` we have just imported as well as the connection string provided by MongoDB. We have amended the connection string to use environment variables including our credentials. 

```javascript
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);
}

```

5. Once we have established a connection, we can connect to the database. 

```javascript
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();
}
```

6. We can now connect to the collection which stores our data:

```javascript
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();

  const meetupCollection = db.collection("meetups");

}
```

7. Finally, we can retrieve data from our collection and turn it into an array for us to work with as follows: 

```javascript
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const events = await meetupCollection.find().toArray();

}
```

8. Don't forget to close the connection to your database once the data has been retrieved: 

```javascript
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const events = await meetupCollection.find().toArray();

  client.close();

}
```

9. Now we can return the retrieved data: 

```javascript
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const events = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      allEvents: events.map((event) => ({
        date: event.date,
        description: event.description,
        featured: event.featured,
        location: event.location,
        presenters: event.presenters,
        title: event.title,
        id: event._id.toString(),
      })),
    }
  };
}
```

10. The complete solution should resemble this:

```javascript
import EventList from "./../components/events/EventList";
import { MongoClient } from "mongodb"

export default function Homepage({allEvents}) {

  const featuredEvents = allEvents.filter(event => event.featured);

  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const events = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      allEvents: events.map((event) => ({
        date: event.date,
        description: event.description,
        featured: event.featured,
        location: event.location,
        presenters: event.presenters,
        title: event.title,
        id: event._id.toString(),
      })),
    }
  };
}
```

11. Finally, this is how the application should now look like:

<p align="center">
<img width="1520" alt="Screenshot 2023-05-23 at 14 41 43" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/f1ce9d6a-f91d-4328-babb-9eeecd374ed3">
</p>
