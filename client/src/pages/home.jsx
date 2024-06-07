import "../App.css";
import {
  Distribute25252525,
  Distribute5050,
  Distribute2575,
  Distribute255025,
  Distribute100,
} from "../components/grid/distribution/gridDistribution";
import Infotext from "../components/infotext/infotext";
import Slideshow from "../components/slideshow/slideshow";

export default function Home() {
  return (
    <>
      <Distribute2575
        one={
          <Infotext>
            <h3 style={{fontWeight: "bold"}}>Welcome to our app, Show_IT!</h3>
          Show it is an app designed to keep your office updated with the latest news, updates and 
          announcements from your company. wether you be looking to stay informed about what happens 
          in the office or birthdays. This app helps ensure you have a great overview on what is going on.
          <br/>
          <br/>
          What our app does: <br/>
          - Collects company posts: this app collects and displays posts within the company, from both 
          the managers and the office workers. <br/>
          - User-friendly Interface: Navigate the app effortlessly with our intuitive and easy to use 
          design. 
          <br/>
          <br/>
          Creating your own posts: <br/>
          You have something important to share with the whole office? It's simple with the "create new" <br/>
          - "Create new": Here you can create and publish your own posts. Share important announcements, 
          product launches, company milestones or any other updates. Just click on "Create new", make the 
          page like youd want and hit publish. 
          <br/>
          <br/>
          Keeping an overview: <br/>
          Keep track of what posts are shown where with the "overview" tab. <br/>
          - "Overview": this section provides an overview over what posts are currently shown where, as 
          well as all the posts currently in rotation.
          <br/>
          <br/>
          Our app is designed to facilitate seamless communication and information sharing within the company. 
          Join us today and experience the convenience of staying informed and connected.
          </Infotext>
        }
        two={
        <Slideshow 
            slides={['/show-it/sample_focus.jpg', '/show-it/sample_pyramid.jpg', '/show-it/sample_sample.jpg',
             '/show-it/sample_Bday.jpg']}
        />
        }
      />
    </>
  );
}
