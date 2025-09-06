import { validate, ValidationError } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { Role } from '@cms-app/prisma';

// Test function to validate the DTO
export async function testCreateUserDto(): Promise<void> {
  const dto = new CreateUserDto();
  dto.email = 'test@example.com';
  dto.name = 'Test User';
  dto.password = 'password123';
  dto.role = Role.CREW;

  try {
    const errors: ValidationError[] = await validate(dto);
    console.log('Validation errors:', errors);
  } catch (error) {
    console.error('Validation failed:', error);
  }

  // Test with invalid email
  const invalidDto = new CreateUserDto();
  invalidDto.email = 'invalid-email';
  invalidDto.name = 'Invalid User';
  invalidDto.password = '123'; // too short
  invalidDto.role = Role.ADMIN;

  try {
    const invalidErrors: ValidationError[] = await validate(invalidDto);
    console.log('Invalid DTO errors:', invalidErrors);
  } catch (error) {
    console.error('Validation failed:', error);
  }
}
