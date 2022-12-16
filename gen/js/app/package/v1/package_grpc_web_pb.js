/**
 * @fileoverview gRPC-Web generated client stub for viam.app.package.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: app/package/v1/package.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.viam = {};
proto.viam.app = {};
proto.viam.app.package = {};
proto.viam.app.package.v1 = require('./package_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.app.package.v1.PackageServiceClient =
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
proto.viam.app.package.v1.PackageServicePromiseClient =
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
 *   !proto.viam.app.package.v1.DeletePackageRequest,
 *   !proto.viam.app.package.v1.DeletePackageResponse>}
 */
const methodDescriptor_PackageService_DeletePackage = new grpc.web.MethodDescriptor(
  '/viam.app.package.v1.PackageService/DeletePackage',
  grpc.web.MethodType.UNARY,
  proto.viam.app.package.v1.DeletePackageRequest,
  proto.viam.app.package.v1.DeletePackageResponse,
  /**
   * @param {!proto.viam.app.package.v1.DeletePackageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.package.v1.DeletePackageResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.package.v1.DeletePackageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.package.v1.DeletePackageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.package.v1.DeletePackageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.package.v1.PackageServiceClient.prototype.deletePackage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.package.v1.PackageService/DeletePackage',
      request,
      metadata || {},
      methodDescriptor_PackageService_DeletePackage,
      callback);
};


/**
 * @param {!proto.viam.app.package.v1.DeletePackageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.package.v1.DeletePackageResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.package.v1.PackageServicePromiseClient.prototype.deletePackage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.package.v1.PackageService/DeletePackage',
      request,
      metadata || {},
      methodDescriptor_PackageService_DeletePackage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.package.v1.GetPackageRequest,
 *   !proto.viam.app.package.v1.GetPackageResponse>}
 */
const methodDescriptor_PackageService_GetPackage = new grpc.web.MethodDescriptor(
  '/viam.app.package.v1.PackageService/GetPackage',
  grpc.web.MethodType.UNARY,
  proto.viam.app.package.v1.GetPackageRequest,
  proto.viam.app.package.v1.GetPackageResponse,
  /**
   * @param {!proto.viam.app.package.v1.GetPackageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.package.v1.GetPackageResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.package.v1.GetPackageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.package.v1.GetPackageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.package.v1.GetPackageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.package.v1.PackageServiceClient.prototype.getPackage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.package.v1.PackageService/GetPackage',
      request,
      metadata || {},
      methodDescriptor_PackageService_GetPackage,
      callback);
};


/**
 * @param {!proto.viam.app.package.v1.GetPackageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.package.v1.GetPackageResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.package.v1.PackageServicePromiseClient.prototype.getPackage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.package.v1.PackageService/GetPackage',
      request,
      metadata || {},
      methodDescriptor_PackageService_GetPackage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.app.package.v1.ListPackagesRequest,
 *   !proto.viam.app.package.v1.ListPackagesResponse>}
 */
const methodDescriptor_PackageService_ListPackages = new grpc.web.MethodDescriptor(
  '/viam.app.package.v1.PackageService/ListPackages',
  grpc.web.MethodType.UNARY,
  proto.viam.app.package.v1.ListPackagesRequest,
  proto.viam.app.package.v1.ListPackagesResponse,
  /**
   * @param {!proto.viam.app.package.v1.ListPackagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.app.package.v1.ListPackagesResponse.deserializeBinary
);


/**
 * @param {!proto.viam.app.package.v1.ListPackagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.app.package.v1.ListPackagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.app.package.v1.ListPackagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.app.package.v1.PackageServiceClient.prototype.listPackages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.app.package.v1.PackageService/ListPackages',
      request,
      metadata || {},
      methodDescriptor_PackageService_ListPackages,
      callback);
};


/**
 * @param {!proto.viam.app.package.v1.ListPackagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.app.package.v1.ListPackagesResponse>}
 *     Promise that resolves to the response
 */
proto.viam.app.package.v1.PackageServicePromiseClient.prototype.listPackages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.app.package.v1.PackageService/ListPackages',
      request,
      metadata || {},
      methodDescriptor_PackageService_ListPackages);
};


module.exports = proto.viam.app.package.v1;
