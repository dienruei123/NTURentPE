const Subscription = {
    eventCreated: {
      subscribe: (parent, args, {pubSub}) => {
        return pubSub.subscribe('EVENT_CREATED');
      },
    },
  };
  
  export default Subscription;