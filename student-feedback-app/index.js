const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student Feedback App</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="text-center">Student Feedback Form</h3>
                        </div>
                        <div class="card-body">
                            <form action="/submit" method="POST" id="feedbackForm">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name *</label>
                                    <input type="text" class="form-control" id="name" name="name" required>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email *</label>
                                    <input type="email" class="form-control" id="email" name="email" required>
                                </div>
                                <div class="mb-3">
                                    <label for="course" class="form-label">Course *</label>
                                    <input type="text" class="form-control" id="course" name="course" required>
                                </div>
                                <div class="mb-3">
                                    <label for="rating" class="form-label">Rating (1-5) *</label>
                                    <select class="form-select" id="rating" name="rating" required>
                                        <option value="">Select a rating</option>
                                        <option value="1">1 - Poor</option>
                                        <option value="2">2 - Fair</option>
                                        <option value="3">3 - Good</option>
                                        <option value="4">4 - Very Good</option>
                                        <option value="5">5 - Excellent</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="comments" class="form-label">Comments *</label>
                                    <textarea class="form-control" id="comments" name="comments" rows="4" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Submit Feedback</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
  `);
});

app.post('/submit', (req, res) => {
  const { name, email, course, rating, comments } = req.body;
  
  // Validation
  if (!name || !email || !course || !rating || !comments) {
    return res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Error - Student Feedback App</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body>
          <div class="container mt-5">
              <div class="row justify-content-center">
                  <div class="col-md-6">
                      <div class="alert alert-danger" role="alert">
                          <h4 class="alert-heading">Error!</h4>
                          <p>All fields are required. Please go back and fill in all fields.</p>
                          <hr>
                          <a class="btn btn-outline-danger" href="/">Back to Form</a>
                      </div>
                  </div>
              </div>
          </div>
      </body>
      </html>
    `);
  }

  // Log to console (simulating data storage)
  console.log('Feedback Received:', {
    name,
    email,
    course,
    rating,
    comments,
    timestamp: new Date().toISOString()
  });

  // Display success page with submitted data
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Student Feedback App</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header bg-success text-white">
                            <h3 class="text-center">Thank You for Your Feedback!</h3>
                        </div>
                        <div class="card-body">
                            <h5>Your submitted feedback:</h5>
                            <table class="table table-bordered mt-3">
                                <tr>
                                    <th width="20%">Name:</th>
                                    <td>${name}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>${email}</td>
                                </tr>
                                <tr>
                                    <th>Course:</th>
                                    <td>${course}</td>
                                </tr>
                                <tr>
                                    <th>Rating:</th>
                                    <td>${rating}/5</td>
                                </tr>
                                <tr>
                                    <th>Comments:</th>
                                    <td>${comments}</td>
                                </tr>
                            </table>
                            <div class="text-center mt-4">
                                <a href="/" class="btn btn-primary">Back to Form</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
  `);
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Student Feedback App running on http://0.0.0.0:${port}`);
});