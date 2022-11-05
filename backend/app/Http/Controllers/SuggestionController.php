<?php

namespace App\Http\Controllers;

use App\Models\Suggestion;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Validator;


class SuggestionController extends Controller
{
    public function find($suggestion)
    {
        return Suggestion::where('suggestion', 'like', "%{$suggestion}%")
        ->orderBy('suggestion','asc')
        ->limit(3)
        ->get();
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'suggestion' => 'required|string|min:3|unique:suggestions,suggestion'
            ]);

            if ($validator->fails()) {
                return  Response([
                    'status' => true,
                    'message' => 'Unable to register suggestion!',
                    'error' => $validator->errors()
                ], 417);
            }

            $suggestion = Suggestion::create($request->all());

            return Response([
                'status' => true,
                'message' => 'Suggestion saved successfully!',
                'Suggestion' => $suggestion
            ]);
        } catch (Exception $e) {
            return Response([
                'status' => false,
                'message' => 'Unable to register suggestion!',
                'error' => $e
            ], 500);
        }
    }
}
