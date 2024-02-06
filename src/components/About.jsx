// About.js

import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="text-center mb-4">About CloudNotes</h1>
          <p>
            Welcome to CloudNotes, your private space for organizing and managing your notes.
            CloudNotes allows you to create, modify, view, and delete notes with full privacy.
            Your notes are securely stored in the cloud, accessible only to you.
          </p>
          <p>
            At CloudNotes, we prioritize the security and privacy of your data. Feel confident
            knowing that your notes are encrypted and protected, providing you with a seamless
            and secure note-taking experience.
          </p>
          <p>
            Features:
            <ul>
              <li>Create and manage notes</li>
              <li>Modify existing notes</li>
              <li>View your notes at any time</li>
              <li>Delete notes securely</li>
              <li>Full privacy and data encryption</li>
            </ul>
          </p>
          <p>
            Get started today and experience the convenience of CloudNotes in organizing your thoughts
            and ideas with peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
