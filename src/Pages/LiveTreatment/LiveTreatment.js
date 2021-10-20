import React from 'react';

const LiveTreatment = () => {
    return (
        <div className='container my-5 p-5 w-75'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Write details</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <select class="form-select" aria-label="Default select example">
                <option selected>Your Blood Group</option>
                <option value="1">A+</option>
                <option value="2">B+</option>
                <option value="3">O+</option>
            </select>
            <div class="mb-3">
                <label for="formFile" class="form-label">Attach Your previous prescriptions</label>
                <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Submit Your Problem</button>
            </div>
        </div>
    );
};

export default LiveTreatment;