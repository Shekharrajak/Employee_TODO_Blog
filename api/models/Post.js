/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  attributes: {
  	
  	jobTitle: {
  		type: 'string'
  		// required: true
  	},

  	profession: {
      type: 'string'
      // required: true
  	},
  	 oneLiner: {
      type: 'text'
      // required: true
    },

    jobDescription: {
      type: 'text'
      // required: true
    },

   /* howToApply: {
      type: 'text'
      // required: true
    },

   

    companyName: {
      type: 'string'
      // required: true
    },

    homeOffice: {
      type: 'string'
      // required: true
    },*/
    userEmail: {
      type: 'string'
      // required: true
    },

    companyURL: {
      type: 'string'
      // required: true
    },

    usOnly : {
      type: 'string'
      // required: true
    }

   /* 

    active: {
      type: 'boolean',
      defaultsTo: true
    },

    views: {
      type: 'integer',
      defaultsTo: '0'
    },

    submissions: {
      type: 'integer',
      defaultsTo: '0'
    },

    conversion: {
      type: 'integer',
      defaultsTo: '0'
    }*/
    
  }

};

