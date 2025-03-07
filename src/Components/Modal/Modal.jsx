import React, { useEffect, useRef } from "react";
import "./Modal.css";
import { useForm } from "react-hook-form";
import { addProduct } from "../../Services/products.service";

export default function Modal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const imageRef = useRef();
  const file = watch("imageUrl");

  const onSubmit = (data) => {
    window.$("#exampleModal").modal("hide");
    addProduct(data);
  };

  if (file && file.length > 0) {
    imageRef.current.style.display = "block";
    imageRef.current.src = URL.createObjectURL(file[0]);
  }

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Product
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <div className="inputDiv mb-3">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please enter the product name",
                      },
                    })}
                  />
                  {errors && errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="inputDiv mb-3">
                  <label className="form-label">Price:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    {...register("price", {
                      required: {
                        value: true,
                        message: "Please enter the price of product",
                      },
                    })}
                  />
                  {errors && errors.price && (
                    <span>{errors.price.message}</span>
                  )}
                </div>
                <div className="inputDiv mb-3">
                  <label className="form-label">Quantity:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Quantity"
                    {...register("qty", {
                      required: {
                        value: true,
                        message: "Please enter the number of products",
                      },
                    })}
                  />
                  {errors && errors.qty && <span>{errors.qty.message}</span>}
                </div>
                <div className="inputDiv mb-3">
                  <label className="form-label">Discount Amount:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Discount Amount:"
                    {...register("discPrice")}
                  />
                </div>
                <div className="inputDiv mb-3">
                  <label className="form-label">Description:</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Description"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Please enter the description of the product",
                      },
                    })}
                  ></textarea>
                  {errors && errors.description && (
                    <span>{errors.description.message}</span>
                  )}
                </div>
                <div className="inputDiv mb-3">
                  <label className="form-label">Product Image:</label>
                  <div className="productImage">
                    <img alt="" className="dummyProductImage" ref={imageRef} />
                  </div>
                  <div className="productImageInputDiv">
                    <input
                      type="file"
                      accept="image/*"
                      {...register("imageUrl", {
                        required: {
                          value: true,
                          message: "Please insert the product image",
                        },
                      })}
                    />
                    {errors && errors.imageUrl && (
                      <span>{errors.imageUrl.message}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
