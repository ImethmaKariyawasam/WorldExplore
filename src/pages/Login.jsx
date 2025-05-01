import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container, Card, Row, Col } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await login(formData);
    setLoading(false);
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <Container className="auth-container py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <Card className="auth-card border-0 shadow">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h2 className="auth-title fw-bold mb-1">Welcome Back</h2>
                <p className="text-muted">Sign in to continue to Countries App</p>
              </div>
              
              {error && <Alert variant="danger" className="mb-4 text-center">{error}</Alert>}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Email Address</Form.Label>
                  <div className="input-group">
                    <div className="input-group-text bg-light border-end-0">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="py-2 border-start-0"
                    />
                  </div>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <div className="d-flex justify-content-between">
                    <Form.Label className="fw-medium">Password</Form.Label>
                    <a href="#" className="text-decoration-none small">Forgot password?</a>
                  </div>
                  <div className="input-group">
                    <div className="input-group-text bg-light border-end-0">
                      <i className="bi bi-lock"></i>
                    </div>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="Enter your password"
                      className="py-2 border-start-0"
                    />
                  </div>
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  disabled={loading} 
                  className="w-100 py-2 mt-3 fw-medium"
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Signing in...
                    </>
                  ) : 'Sign In'}
                </Button>
              </Form>
              
              <div className="text-center mt-4">
                <p className="mb-0 text-muted">
                  Don't have an account? <a href="/register" className="fw-medium text-decoration-none">Sign Up</a>
                </p>
              </div>
            </Card.Body>
          </Card>
          
          <div className="text-center mt-4">
            <p className="text-muted small">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;