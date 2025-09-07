import React from 'react';
import { Button, Card, Typography, Divider } from 'antd';
import { ReloadOutlined, BugOutlined, HomeOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

interface VercelStyleErrorPageProps {
  error?: Error;
  errorInfo?: React.ErrorInfo;
  title?: string;
  description?: string;
}

const VercelStyleErrorPage: React.FC<VercelStyleErrorPageProps> = ({
  error,
  errorInfo,
  title = "Application error: a client-side exception has occurred",
  description = "See the browser console for more information."
}) => {
  const handleReload = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const copyErrorToClipboard = () => {
    const errorText = `
Error: ${error?.message || 'Unknown error'}
Stack: ${error?.stack || 'No stack trace available'}
Component Stack: ${errorInfo?.componentStack || 'No component stack available'}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Timestamp: ${new Date().toISOString()}
    `.trim();

    navigator.clipboard.writeText(errorText).then(() => {
      console.log('Error details copied to clipboard');
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Card 
        style={{ 
          maxWidth: '600px', 
          width: '100%',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Header with Icon */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            backgroundColor: '#ff4d4f',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            color: 'white',
            fontSize: '24px'
          }}>
            <BugOutlined />
          </div>
          
          <Title level={3} style={{ color: '#262626', marginBottom: '8px' }}>
            {title}
          </Title>
          
          <Text type="secondary" style={{ fontSize: '16px' }}>
            {description}
          </Text>
        </div>

        <Divider />

        {/* Action Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          justifyContent: 'center',
          marginBottom: '24px',
          flexWrap: 'wrap'
        }}>
          <Button 
            type="primary" 
            icon={<ReloadOutlined />}
            onClick={handleReload}
            size="large"
          >
            Reload Page
          </Button>
          
          <Button 
            icon={<HomeOutlined />}
            onClick={handleGoHome}
            size="large"
          >
            Go Home
          </Button>
          
          {error && (
            <Button 
              onClick={copyErrorToClipboard}
              size="large"
            >
              Copy Error Details
            </Button>
          )}
        </div>

        {/* Error Details (Expandable) */}
        {error && (
          <>
            <Divider />
            <details style={{ marginTop: '16px' }}>
              <summary style={{ 
                cursor: 'pointer', 
                padding: '8px 0',
                fontSize: '14px',
                fontWeight: 500,
                color: '#595959'
              }}>
                🔍 Technical Details (Click to expand)
              </summary>
              
              <div style={{ 
                marginTop: '12px',
                padding: '16px',
                backgroundColor: '#f5f5f5',
                borderRadius: '6px',
                border: '1px solid #d9d9d9'
              }}>
                <div style={{ marginBottom: '12px' }}>
                  <Text strong>Error Message:</Text>
                  <Paragraph 
                    code 
                    style={{ 
                      marginTop: '4px',
                      backgroundColor: '#fff2f0',
                      padding: '8px',
                      borderRadius: '4px',
                      border: '1px solid #ffccc7'
                    }}
                  >
                    {error.message}
                  </Paragraph>
                </div>

                {error.stack && (
                  <div style={{ marginBottom: '12px' }}>
                    <Text strong>Stack Trace:</Text>
                    <pre style={{
                      fontSize: '12px',
                      backgroundColor: '#fff',
                      padding: '12px',
                      borderRadius: '4px',
                      border: '1px solid #d9d9d9',
                      overflow: 'auto',
                      maxHeight: '200px',
                      marginTop: '4px'
                    }}>
                      {error.stack}
                    </pre>
                  </div>
                )}

                {errorInfo?.componentStack && (
                  <div>
                    <Text strong>Component Stack:</Text>
                    <pre style={{
                      fontSize: '12px',
                      backgroundColor: '#fff',
                      padding: '12px',
                      borderRadius: '4px',
                      border: '1px solid #d9d9d9',
                      overflow: 'auto',
                      maxHeight: '150px',
                      marginTop: '4px'
                    }}>
                      {errorInfo.componentStack}
                    </pre>
                  </div>
                )}

                <div style={{ marginTop: '12px', fontSize: '12px', color: '#8c8c8c' }}>
                  <div>URL: {window.location.href}</div>
                  <div>Timestamp: {new Date().toISOString()}</div>
                  <div>User Agent: {navigator.userAgent}</div>
                </div>
              </div>
            </details>
          </>
        )}

        {/* Footer */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '24px',
          paddingTop: '16px',
          borderTop: '1px solid #f0f0f0'
        }}>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            If this error persists, please contact support with the error details above.
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default VercelStyleErrorPage;
