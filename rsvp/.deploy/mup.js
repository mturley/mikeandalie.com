module.exports = {
  servers: {
    one: {
      host: 'mikeandalie.com',
      username: 'mup',
      pem: '/Users/mturley/.ssh/id_rsa'
    }
  },

  app: {
    name: 'rsvp',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://mikeandalie.com/rsvp',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
      PORT: 3000
    },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:node-8.4.0-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  // proxy: {
  //   domains: 'rsvp.mikeandalie.com',
  //   ssl: {
  //     letsEncryptEmail: 'mike.turley@alum.cs.umass.edu',
  //     forceSSL: true
  //   }
  // }
};
