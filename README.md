Frontend:
+++++++++++++++++++++++++++++++++++++++++++++++++

please start api server before starting the front end.

instructions:

1) To start project use 'npm start' in command line and the page will auto load on port 3000.
2) All email being send will try to use mailgun service first. Testing account for mailgun will only allow mails
to be send to authorized recipients only, therefore email being tested will always fail unless recipient is on my authorized list.
3) If mailgun service fails then the system will attempt to use sendgrid to send emails.
4) if everything is working, the user should see a message saying 'email sent'.




