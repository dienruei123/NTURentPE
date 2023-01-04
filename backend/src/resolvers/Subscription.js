const Subscription = {
    eventCreated: {
      subscribe: (parent, args, {pubsub}) => {
        return pubsub.subscribe('EVENT_CREATED');
      },
    },
    eventJoined: {
      subscribe: (parent, args, {pubsub}) => {
        return pubsub.subscribe('EVENT_JOINED');
      },
    },
    eventCanceled: {
      subscribe: (parent, args, {pubsub}) => {
        return pubsub.subscribe('EVENT_CANCELED');
      },
    },

  };
  
  export default Subscription;