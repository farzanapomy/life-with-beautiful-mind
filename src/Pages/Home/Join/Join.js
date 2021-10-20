import React from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    return (
        <div className='container text-start my-5'>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">You First Name</label>
                    <input required type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">You Last Name</label>
                    <input required type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input required type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input required type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Write About Your qualifications</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input required type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input required type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input required type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input required type="text" class="form-control" id="inputZip" />
                </div>
                
                <div class="col-12">
                    <Link to='successful'> <button type="submit" class="btn btn-primary">Sign in</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Join;