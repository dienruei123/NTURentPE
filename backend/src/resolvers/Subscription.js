const Subscription = {
    eventCreated: {
      subscribe: (parent, args, {pubsub}) => {
        return pubsub.subscribe('EVENT_CREATED');
      },
    },
  };
  
  export default Subscription;