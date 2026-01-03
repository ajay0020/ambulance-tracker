# Database Schema – SOS Emergency App

## User Collection
Stores basic user information.

Fields:
- _id
- name
- phone
- email (optional)
- createdAt

## EmergencyContact Collection
Stores emergency contacts linked to a user.

Fields:
- _id
- userId (reference to User)
- name
- phone
- relation
- createdAt

## SOSAlert Collection
Stores SOS alert events.

Fields:
- _id
- userId (reference to User)
- latitude
- longitude
- status (sent / failed)
- createdAt
