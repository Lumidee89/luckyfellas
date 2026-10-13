<?php

namespace App\Http\Controllers;

use App\Models\GalleryImage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class GalleryImageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Gallery', [
            'images' => GalleryImage::latest()->get()->map(fn (GalleryImage $image) => [
                'id' => $image->id,
                'title' => $image->title,
                'caption' => $image->caption,
                'url' => asset('storage/'.$image->path),
                'created_at' => $image->created_at->format('M j, Y'),
            ]),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['nullable', 'string', 'max:120'],
            'caption' => ['nullable', 'string', 'max:500'],
            'image' => ['required', 'image', 'max:5120'],
        ]);

        $path = $request->file('image')->store('gallery', 'public');

        GalleryImage::create([
            'title' => $validated['title'] ?? null,
            'caption' => $validated['caption'] ?? null,
            'path' => $path,
        ]);

        return back();
    }

    public function destroy(GalleryImage $galleryImage): RedirectResponse
    {
        Storage::disk('public')->delete($galleryImage->path);
        $galleryImage->delete();

        return back();
    }
}
