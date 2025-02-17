/**
 * @fileoverview gRPC-Web generated client stub for proto.stream.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: stream/v1/stream.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = {};
proto.proto.stream = {};
proto.proto.stream.v1 = require('./stream_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.stream.v1.StreamServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.stream.v1.StreamServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.stream.v1.ListStreamsRequest,
 *   !proto.proto.stream.v1.ListStreamsResponse>}
 */
const methodDescriptor_StreamService_ListStreams = new grpc.web.MethodDescriptor(
  '/proto.stream.v1.StreamService/ListStreams',
  grpc.web.MethodType.UNARY,
  proto.proto.stream.v1.ListStreamsRequest,
  proto.proto.stream.v1.ListStreamsResponse,
  /**
   * @param {!proto.proto.stream.v1.ListStreamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.stream.v1.ListStreamsResponse.deserializeBinary
);


/**
 * @param {!proto.proto.stream.v1.ListStreamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.stream.v1.ListStreamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.stream.v1.ListStreamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.stream.v1.StreamServiceClient.prototype.listStreams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.stream.v1.StreamService/ListStreams',
      request,
      metadata || {},
      methodDescriptor_StreamService_ListStreams,
      callback);
};


/**
 * @param {!proto.proto.stream.v1.ListStreamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.stream.v1.ListStreamsResponse>}
 *     Promise that resolves to the response
 */
proto.proto.stream.v1.StreamServicePromiseClient.prototype.listStreams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.stream.v1.StreamService/ListStreams',
      request,
      metadata || {},
      methodDescriptor_StreamService_ListStreams);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.stream.v1.AddStreamRequest,
 *   !proto.proto.stream.v1.AddStreamResponse>}
 */
const methodDescriptor_StreamService_AddStream = new grpc.web.MethodDescriptor(
  '/proto.stream.v1.StreamService/AddStream',
  grpc.web.MethodType.UNARY,
  proto.proto.stream.v1.AddStreamRequest,
  proto.proto.stream.v1.AddStreamResponse,
  /**
   * @param {!proto.proto.stream.v1.AddStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.stream.v1.AddStreamResponse.deserializeBinary
);


/**
 * @param {!proto.proto.stream.v1.AddStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.stream.v1.AddStreamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.stream.v1.AddStreamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.stream.v1.StreamServiceClient.prototype.addStream =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.stream.v1.StreamService/AddStream',
      request,
      metadata || {},
      methodDescriptor_StreamService_AddStream,
      callback);
};


/**
 * @param {!proto.proto.stream.v1.AddStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.stream.v1.AddStreamResponse>}
 *     Promise that resolves to the response
 */
proto.proto.stream.v1.StreamServicePromiseClient.prototype.addStream =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.stream.v1.StreamService/AddStream',
      request,
      metadata || {},
      methodDescriptor_StreamService_AddStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.stream.v1.GetStreamOptionsRequest,
 *   !proto.proto.stream.v1.GetStreamOptionsResponse>}
 */
const methodDescriptor_StreamService_GetStreamOptions = new grpc.web.MethodDescriptor(
  '/proto.stream.v1.StreamService/GetStreamOptions',
  grpc.web.MethodType.UNARY,
  proto.proto.stream.v1.GetStreamOptionsRequest,
  proto.proto.stream.v1.GetStreamOptionsResponse,
  /**
   * @param {!proto.proto.stream.v1.GetStreamOptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.stream.v1.GetStreamOptionsResponse.deserializeBinary
);


/**
 * @param {!proto.proto.stream.v1.GetStreamOptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.stream.v1.GetStreamOptionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.stream.v1.GetStreamOptionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.stream.v1.StreamServiceClient.prototype.getStreamOptions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.stream.v1.StreamService/GetStreamOptions',
      request,
      metadata || {},
      methodDescriptor_StreamService_GetStreamOptions,
      callback);
};


/**
 * @param {!proto.proto.stream.v1.GetStreamOptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.stream.v1.GetStreamOptionsResponse>}
 *     Promise that resolves to the response
 */
proto.proto.stream.v1.StreamServicePromiseClient.prototype.getStreamOptions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.stream.v1.StreamService/GetStreamOptions',
      request,
      metadata || {},
      methodDescriptor_StreamService_GetStreamOptions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.stream.v1.SetStreamOptionsRequest,
 *   !proto.proto.stream.v1.SetStreamOptionsResponse>}
 */
const methodDescriptor_StreamService_SetStreamOptions = new grpc.web.MethodDescriptor(
  '/proto.stream.v1.StreamService/SetStreamOptions',
  grpc.web.MethodType.UNARY,
  proto.proto.stream.v1.SetStreamOptionsRequest,
  proto.proto.stream.v1.SetStreamOptionsResponse,
  /**
   * @param {!proto.proto.stream.v1.SetStreamOptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.stream.v1.SetStreamOptionsResponse.deserializeBinary
);


/**
 * @param {!proto.proto.stream.v1.SetStreamOptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.stream.v1.SetStreamOptionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.stream.v1.SetStreamOptionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.stream.v1.StreamServiceClient.prototype.setStreamOptions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.stream.v1.StreamService/SetStreamOptions',
      request,
      metadata || {},
      methodDescriptor_StreamService_SetStreamOptions,
      callback);
};


/**
 * @param {!proto.proto.stream.v1.SetStreamOptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.stream.v1.SetStreamOptionsResponse>}
 *     Promise that resolves to the response
 */
proto.proto.stream.v1.StreamServicePromiseClient.prototype.setStreamOptions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.stream.v1.StreamService/SetStreamOptions',
      request,
      metadata || {},
      methodDescriptor_StreamService_SetStreamOptions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.stream.v1.RemoveStreamRequest,
 *   !proto.proto.stream.v1.RemoveStreamResponse>}
 */
const methodDescriptor_StreamService_RemoveStream = new grpc.web.MethodDescriptor(
  '/proto.stream.v1.StreamService/RemoveStream',
  grpc.web.MethodType.UNARY,
  proto.proto.stream.v1.RemoveStreamRequest,
  proto.proto.stream.v1.RemoveStreamResponse,
  /**
   * @param {!proto.proto.stream.v1.RemoveStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.stream.v1.RemoveStreamResponse.deserializeBinary
);


/**
 * @param {!proto.proto.stream.v1.RemoveStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.stream.v1.RemoveStreamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.stream.v1.RemoveStreamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.stream.v1.StreamServiceClient.prototype.removeStream =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.stream.v1.StreamService/RemoveStream',
      request,
      metadata || {},
      methodDescriptor_StreamService_RemoveStream,
      callback);
};


/**
 * @param {!proto.proto.stream.v1.RemoveStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.stream.v1.RemoveStreamResponse>}
 *     Promise that resolves to the response
 */
proto.proto.stream.v1.StreamServicePromiseClient.prototype.removeStream =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.stream.v1.StreamService/RemoveStream',
      request,
      metadata || {},
      methodDescriptor_StreamService_RemoveStream);
};


module.exports = proto.proto.stream.v1;

