import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Upload Files', () => {
  test('Should upload a test file', async ({ page }) => {
    
    // Navigate to the page
    await page.goto('https://practice.sdetunicorns.com/cart/')

    // Provide the path to the file
    const filePath = path.join(__dirname, '../data/logo.png')

    // Upload the file
    await page.setInputFiles('input#upfile_1', filePath)

    // Click Submit button
    await page.getByRole('button', { name: 'Upload File' }).click()

    // Assert that the file was uploaded
    await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('File logo.png uploaded successfully');
  })
});